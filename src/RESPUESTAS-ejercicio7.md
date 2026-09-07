# Ejercicio 7 — `type` vs `interface`

> Este archivo no se corrige con tests automáticos: lo lee el docente.
> Respondé con tus palabras, en base a lo que probaste en `ej07-tipos-interfaces.ts`.

## ¿Qué permite hacer `interface` que `type` no (o no tan bien)?

A diferencia de type, interface permite realizar "declaration merge", es decir, si declaramos dos o más interfaces con el mismo nombre se combinan.

## ¿Qué permite hacer `type` que `interface` no?

Type permite:
 
 -uniones: ej. type Estado = "activo" | "inactivo";
 -tuplas, donde cada posicion tiene su propio tipo: type ParNombreEdad = [string, number];
 -mapeados: puede recorrer las claves de OTRO tipo y generar uno nuevo transformándolas, con la sintaxis [K in keyof T]
 -alias de tipos primitivos: puede ponerle nombre a un tipo que ya existe, type Legajo = number;

## ¿Ambas se pueden extender? ¿Cómo se hace en cada caso?

Si, ambas pueden extenderse pero se realiza con una sintaxis diferente.
Para extender una interfaz, se utiliza la palabra "extends", ejemplo:

interface Persona {
    nombre: string;
    email: string;
}

interface Alumno extends Persona {
    legajo: number;
}

Por otro lado, para extender un type se utiliza & (intersección), ejemplo:

type PersonaT = {
    nombre: string;
    email: string;
};

type AlumnoT = PersonaT & {
    legajo: number;
};

## ¿Cuál elegirían para representar una entidad del dominio (por ejemplo, `Alumno`)? ¿Por qué?

Elegiria interface porque es la opción mas clásica para modelar entidades de dominio que luego van a ser implementadas por clases. Además si en algún momento es necesario agregarle una propiedad a la interfaz Alumno, el declaration merging nos lo permite.
Por otro lado, no elegimos type ya que éste no permite el declaration merging en el caso de que sea necesario agregarle propiedades a Alumno. Además Alumno no necesita nada de lo que type puede hacer y un interface no (uniones, tuplas, alias de primitivos).
