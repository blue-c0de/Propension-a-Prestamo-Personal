## Introducción – Problema de Negocio
El proyecto busca identificar qué clientes tienen mayor probabilidad de adquirir un préstamo personal, permitiendo focalizar esfuerzos comerciales y mejorar la eficiencia de campañas.

## *Requisitos de instalación (ejecución local)

Para garantizar la correcta ejecución del proyecto en un entorno local, es necesario instalar previamente los siguientes paquetes de R:

```r
install.packages(c("DBI", "RSQLite", "knitr"))
```

Estos paquetes se utilizan para:

- **DBI**: conexión y manejo de bases de datos desde R.
- **RSQLite**: creación y consulta de bases de datos SQLite.
- **knitr**: generación del informe reproducible (RMarkdown / Rhtml).

> ⚠️ **Nota:**  
> La instalación de paquetes debe realizarse **una sola vez desde la consola de R**.  
> El documento no instala paquetes automáticamente durante la compilación (*knit*) para asegurar reproducibilidad y evitar errores por configuración del sistema.


## Objetivo General
Construir un modelo predictivo que estime la propensión de un cliente a solicitar un préstamo personal.

## Objetivos Específicos
- Analizar el dataset bancario.
- Detectar patrones y relaciones relevantes.
- Identificar problemas de calidad de datos.
- Preprocesar la información.
- Entrenar y evaluar modelos de clasificación.
- Definir un cut-off útil para priorizar campañas.
- Elaborar un informe claro para negocio.

## Fuentes de Datos
El proyecto utiliza información bancaria como:
- Edad
- Estado civil
- Ingresos
- Historial previo con campañas
- Tenencia de productos financieros
- Actividad y riesgo bancario
Además de una base SQLite incluida en el proyecto.

## Metodología
1. Revisión y organización de datos
2. Análisis exploratorio (EDA)
3. Detección de problemas
4. Limpieza y preprocesamiento
5. Modelado predictivo
6. Evaluación de métricas
7. Conclusiones para negocio

## Tecnologías Utilizadas
- R / RStudio Cloud
- SQLite
- RMarkdown / RHTML
- CSS
- JavaScript
  
## Conclusiones
- Es viable predecir con precisión la propensión a préstamo.
- Permite segmentar clientes con mayor potencial de conversión.
- Mejora la focalización y eficiencia de campañas bancarias.
