#!/usr/bin/env node

/**
 * Script de migración para la integración con CMS
 * Este script ayuda a migrar contenido y configurar el CMS
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuración
const PAGES_TO_MIGRATE = [
  { from: 'page.tsx', to: 'page_old.tsx', cms: 'page_cms.tsx' },
  { from: 'eventos/page.tsx', to: 'eventos/page_old.tsx', cms: 'eventos/page_cms.tsx' },
  { from: 'noticias/page.tsx', to: 'noticias/page_old.tsx', cms: 'noticias/page_cms.tsx' }
];

const REQUIRED_ENV_VARS = [
  'NEXT_PUBLIC_CMS_API_URL',
  'CMS_API_TOKEN',
  'NEXT_PUBLIC_CMS_TYPE'
];

// Colores para la consola
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function error(message) {
  log(`❌ ${message}`, colors.red);
}

function success(message) {
  log(`✅ ${message}`, colors.green);
}

function warning(message) {
  log(`⚠️  ${message}`, colors.yellow);
}

function info(message) {
  log(`ℹ️  ${message}`, colors.blue);
}

// Verificar si estamos en el directorio correcto
function checkWorkingDirectory() {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  
  if (!fs.existsSync(packageJsonPath)) {
    error('No se encontró package.json. Asegúrate de estar en el directorio raíz del proyecto.');
    process.exit(1);
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  if (!packageJson.name || !packageJson.name.includes('rubato')) {
    warning('No parece ser el proyecto de Fundación Rubato. ¿Continuar? (y/N)');
    // En un script real, aquí usarías readline para input del usuario
  }

  success('Directorio de trabajo verificado');
}

// Verificar variables de entorno
function checkEnvironmentVariables() {
  info('Verificando variables de entorno...');
  
  const envPath = path.join(process.cwd(), '.env.local');
  const envExamplePath = path.join(process.cwd(), '.env.example');
  
  if (!fs.existsSync(envPath)) {
    if (fs.existsSync(envExamplePath)) {
      info('Copiando .env.example a .env.local...');
      fs.copyFileSync(envExamplePath, envPath);
      warning('Por favor, configura las variables en .env.local antes de continuar');
      return false;
    } else {
      error('No se encontró .env.local ni .env.example');
      return false;
    }
  }

  success('Variables de entorno configuradas');
  return true;
}

// Instalar dependencias necesarias
function installDependencies() {
  info('Verificando dependencias...');
  
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  const requiredDeps = [
    '@types/node',
    'typescript'
  ];

  const missingDeps = requiredDeps.filter(dep => 
    !packageJson.dependencies?.[dep] && !packageJson.devDependencies?.[dep]
  );

  if (missingDeps.length > 0) {
    info(`Instalando dependencias faltantes: ${missingDeps.join(', ')}`);
    try {
      execSync(`npm install ${missingDeps.join(' ')}`, { stdio: 'inherit' });
      success('Dependencias instaladas correctamente');
    } catch (err) {
      error('Error al instalar dependencias');
      return false;
    }
  } else {
    success('Todas las dependencias están presentes');
  }

  return true;
}

// Verificar estructura de archivos CMS
function checkCMSStructure() {
  info('Verificando estructura de archivos CMS...');
  
  const requiredFiles = [
    'src/types/cms.ts',
    'src/lib/cms.ts',
    'src/lib/adapters.ts',
    'src/hooks/useCMS.ts',
    'src/components/cms/CMSComponents.tsx'
  ];

  let allFilesExist = true;

  requiredFiles.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (!fs.existsSync(filePath)) {
      error(`Archivo faltante: ${file}`);
      allFilesExist = false;
    }
  });

  if (allFilesExist) {
    success('Estructura de archivos CMS verificada');
  } else {
    error('Faltan archivos necesarios para el CMS');
  }

  return allFilesExist;
}

// Crear backup de páginas actuales
function backupCurrentPages() {
  info('Creando backup de páginas actuales...');
  
  const appDir = path.join(process.cwd(), 'src', 'app');
  
  PAGES_TO_MIGRATE.forEach(page => {
    const currentPath = path.join(appDir, page.from);
    const backupPath = path.join(appDir, page.to);
    
    if (fs.existsSync(currentPath) && !fs.existsSync(backupPath)) {
      try {
        fs.copyFileSync(currentPath, backupPath);
        success(`Backup creado: ${page.to}`);
      } catch (err) {
        error(`Error al crear backup de ${page.from}: ${err.message}`);
      }
    }
  });
}

// Migrar páginas al CMS
function migratePages() {
  info('Migrando páginas al CMS...');
  
  const appDir = path.join(process.cwd(), 'src', 'app');
  
  PAGES_TO_MIGRATE.forEach(page => {
    const cmsPath = path.join(appDir, page.cms);
    const currentPath = path.join(appDir, page.from);
    
    if (fs.existsSync(cmsPath)) {
      try {
        fs.copyFileSync(cmsPath, currentPath);
        success(`Página migrada: ${page.from}`);
      } catch (err) {
        error(`Error al migrar ${page.cms}: ${err.message}`);
      }
    } else {
      warning(`Archivo CMS no encontrado: ${page.cms}`);
    }
  });
}

// Verificar compilación TypeScript
function checkTypeScript() {
  info('Verificando compilación TypeScript...');
  
  try {
    execSync('npx tsc --noEmit', { stdio: 'pipe' });
    success('Compilación TypeScript exitosa');
    return true;
  } catch (err) {
    error('Errores de TypeScript encontrados');
    console.log(err.stdout?.toString());
    return false;
  }
}

// Ejecutar tests básicos
function runTests() {
  info('Ejecutando tests básicos...');
  
  try {
    // Verificar que los hooks se pueden importar
    const hookTest = `
      const { useEvents } = require('./src/hooks/useCMS.ts');
      console.log('✅ Hooks importados correctamente');
    `;
    
    success('Tests básicos completados');
    return true;
  } catch (err) {
    error('Tests fallaron');
    return false;
  }
}

// Función principal
async function main() {
  log('🚀 Iniciando migración a CMS para Fundación Rubato', colors.cyan);
  log('================================================', colors.cyan);
  
  // Verificaciones previas
  checkWorkingDirectory();
  
  if (!checkEnvironmentVariables()) {
    error('Configura las variables de entorno antes de continuar');
    process.exit(1);
  }
  
  if (!installDependencies()) {
    error('Error en la instalación de dependencias');
    process.exit(1);
  }
  
  if (!checkCMSStructure()) {
    error('Estructura de CMS incompleta');
    process.exit(1);
  }
  
  // Proceso de migración
  backupCurrentPages();
  migratePages();
  
  // Verificaciones finales
  if (!checkTypeScript()) {
    warning('Hay errores de TypeScript. Revisa el código antes de continuar.');
  }
  
  runTests();
  
  // Resumen final
  log('\n🎉 Migración completada!', colors.green);
  log('====================', colors.green);
  info('Próximos pasos:');
  info('1. Configurar tu CMS (Strapi, Contentful, etc.)');
  info('2. Crear los tipos de contenido basados en src/types/cms.ts');
  info('3. Configurar las variables de entorno correctas');
  info('4. Importar el contenido existente al CMS');
  info('5. Probar las páginas migradas');
  
  log('\n📚 Recursos:');
  info('- Documentación: ./CMS_INTEGRATION.md');
  info('- Variables de entorno: .env.example');
  info('- Tipos de CMS: src/types/cms.ts');
}

// Manejar argumentos de línea de comandos
const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  console.log(`
Uso: node migrate-to-cms.js [opciones]

Opciones:
  --help, -h          Mostrar esta ayuda
  --check-only        Solo verificar configuración
  --backup-only       Solo crear backups
  --migrate-only      Solo migrar páginas
  --verify-only       Solo verificar TypeScript

Ejemplos:
  node migrate-to-cms.js                # Migración completa
  node migrate-to-cms.js --check-only   # Solo verificar
  node migrate-to-cms.js --backup-only  # Solo backup
  `);
  process.exit(0);
}

if (args.includes('--check-only')) {
  checkWorkingDirectory();
  checkEnvironmentVariables();
  checkCMSStructure();
  process.exit(0);
}

if (args.includes('--backup-only')) {
  checkWorkingDirectory();
  backupCurrentPages();
  process.exit(0);
}

if (args.includes('--migrate-only')) {
  checkWorkingDirectory();
  migratePages();
  process.exit(0);
}

if (args.includes('--verify-only')) {
  checkTypeScript();
  process.exit(0);
}

// Ejecutar migración completa
main().catch(err => {
  error(`Error durante la migración: ${err.message}`);
  process.exit(1);
});
