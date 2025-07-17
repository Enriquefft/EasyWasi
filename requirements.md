## 1. Introducción

### 1.1 Propósito

Describir en detalle las funcionalidades, diseño y experiencia de usuario de la aplicación web de Easy Wasi para los tres perfiles de usuarios (hogares, microfinancieras y constructoras), con foco en un formulario interactivo de revelación progresiva y una sección clara que explique qué es Easy Wasi y su propuesta de valor.

### 1.2 Alcance

* Aplicación full-stack en Next.js (App Router)
* UI basada en Shadcn UI siguiendo las pautas de marca (leer `docs/brand.md`)
* ORM: Drizzle (con migraciones y modelos definidos)
* Sin backend dedicado: Server Actions para mutaciones y Server Components para renderizado
* Única landing page con:

  1. Sección "¿Qué es Easy Wasi?"
  2. Selector de perfil y formulario dinámico

## 2. ¿Qué es Easy Wasi?

Easy Wasi es una plataforma 100 % digital de financiamiento modular y progresivo para refuerzos estructurales de viviendas en Perú. Permite a los propietarios fortalecer su hogar en pequeñas etapas, conectándolos con microfinancieras y constructoras certificadas, todo a través de un único formulario interactivo y con una interfaz amigable y fluida.

### 2.1 Beneficios por Perfil

* **Hogares:** Seguridad sísmica gradual sin inversión única elevada. Cada etapa mejora la resistencia de tu vivienda y se ajusta a tu presupuesto.
* **Microfinancieras (MFI):** Leads cualificados de propietarios interesados en crédito para mejoras estructurales, segmentados por región y tipo de proyecto.
* **Constructoras:** Acceso directo a proyectos modulares adaptados a tu capacidad de ejecución local, con clientes informados y motivados.

## 3. Descripción General

### 3.1 Contexto del Producto

Easy Wasi ofrece financiamiento modular y progresivo para reforzamientos estructurales de viviendas en Perú. Un único formulario recolecta leads de hogares que necesitan mejoras, microfinancieras interesadas en ofrecer créditos y constructoras en busca de proyectos.

### 3.2 Usuarios y Necesidades

| Perfil                | Necesidad principal                                                                |
| --------------------- | ---------------------------------------------------------------------------------- |
| Hogar                 | Completar datos de su vivienda y solicitar una mejora en etapas según su capacidad |
| Microfinanciera (MFI) | Recibir leads de clientes potenciales para ofrecer microcréditos                   |
| Constructora          | Captar oportunidades de obra y expandir su pipeline de proyectos                   |

## 4. Requerimientos Funcionales - Landing page

### "¿Qué es EasyWasi?"

* Sección destacada al inicio con breve descripción y beneficios para cada perfil.
* Diseño visual coherente con branding: fondo blanco, encabezados Montserrat Bold, textos Open Sans.

### Flujo del Formulario

1. Mostrar selector de perfil (Hogar, MFI, Constructora) con íconos y etiquetas en Terracota.
2. Revelación progresiva: tras elegir el perfil, desplegar los campos específicos con animaciones leves (deslizamiento y fade) implementadas con Framer Motion.
3. Indicador de progreso (barra o pasos) que muestre la sección activa.
4. Envío de datos mediante Server Actions sin recarga de página.
5. Mensaje de confirmación (toast en Verde Hope): “¡Gracias! Recibimos tu solicitud.”

### 4.3 Campos Comunes (todos los perfiles)


### 4.4 Campos por Perfil

#### 4.4.1 Hogar

* Nombre completo
* Ubicación (país, ciudad, distrito)
* Tipo de vivienda (casa, departamento, otro)
* Año de construcción
* Material principal de muros y techo
* Problemas existentes
* Correo electrónico
* Teléfono
* Consultas o cualquier cosa

#### 4.4.2 Microfinanciera (MFI)

* Nombre de la entidad
* Nombre del contacto
* Correo electrónico
* Teléfono
* Región o zonas de operación
* Tipo de creditos ofrecidos
* Consultas o cualquier cosa


#### 4.4.3 Constructora

* Nombre de la empresa
* Nombre del contacto
* Áreas o zonas de trabajo
* Capacidad de ejecución (tamaño y tipo de obra)
* Correo electrónico
* Teléfono
* Consultas o cualquier cosa

## 5. Diseño de Interfaz y Animaciones

### 5.1 Estilo Visual y Branding

Revisar `docs/brand.md`.

### 5.2 Animaciones y Microinteracciones

* Transiciones de entrada/salida de secciones: `opacity` y `translateY` con Framer Motion.
* Hover y foco: animación suave de `border-color` y `box-shadow`.
* Checkmark animado tras validación de email.

## 6. Requerimientos No Funcionales

### 6.1 Rendimiento

* Carga inicial < 2 s en 3G.
* Hydration parcial por perfil seleccionado.
* Assets optimizados y servidos desde CDN.

### 6.2 Escalabilidad y Disponibilidad

* Despliegue serverless/edge (Vercel) con SLA ≥ 99.9%.
* Conexiones DB gestionadas eficientemente con Drizzle.

### 6.3 Usabilidad y Accesibilidad

* Labels claros y placeholders descriptivos.
* Navegación por teclado con indicadores de foco.
* Contraste de texto ≥ 4.5:1.

### 6.4 Mantenibilidad

* Estructura modular en `app/` de Next.js.
* Componentes reutilizables de Shadcn UI.
* Modelos y migraciones en Drizzle con documentación.

## 7. Flujos de Usuario (User Stories)

1. **Hogar en zona vulnerable:** “Vivo en una zona pobre, me preocupan los terremotos pero no tengo plata para una gran mejora. Quiero solicitar un refuerzo progresivo que se adapte a mi presupuesto.”
2. **Hogar primerizo:** “Compré mi primera casa y quiero reforzar el techo poco a poco.”
3. **MFI en expansión:** “Somos una microfinanciera y buscamos nuevos leads para ofrecer microcréditos a propietarios.”
4. **Constructora local:** “Dirijo una constructora pequeña y quiero más proyectos modulares.”
