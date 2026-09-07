/**
 * EJERCICIO 20 (INTEGRADOR) - Sistema de gestión de una universidad
 * ---------------------------------------------------------------------------
 * Persona
 *   ├── Alumno
 *   └── Docente
 *
 * `Persona` es abstracta. `Alumno` y `Docente` implementan
 * `obtenerInformacion()` cada uno a su manera (polimorfismo).
 *
 * La relación con `Materia` es de ida y vuelta:
 *   - `alumno.inscribirse(materia)` debe dejar constancia tanto en el
 *     alumno (su lista de materias) como en la materia (su lista de
 *     alumnos inscriptos).
 *   - `docente.asignarMateria(materia)` es análogo, del lado docente.
 *
 * Los métodos de `Materia` (`inscribirAlumno`, `asignarDocente`) son el
 * mecanismo que usan `Alumno`/`Docente` para avisarle a la materia. No hace
 * falta (ni corresponde) llamarlos "a mano" salvo que quieras inscribir
 * solamente del lado de la materia.
 */

export abstract class Persona {
  constructor(
    public legajo: number,
    public nombre: string,
    public apellido: string,
    public email: string,
  ) {}

  abstract obtenerInformacion(): string;
}

export class Materia {
  private alumnosInscriptos: Alumno[] = [];
  private docentesAsignados: Docente[] = [];

  constructor(
    public codigo: number,
    public nombre: string,
    public horas: number,
  ) {}

  estaPresente(persona: Persona): boolean {
    let esta = false;
    if (persona instanceof Alumno) {
      esta = this.alumnosInscriptos.some((alumno) => alumno.legajo === persona.legajo);
    } else {
      esta = this.docentesAsignados.some((docente) => docente.legajo === persona.legajo);
    }

    return esta;
  }

  inscribirAlumno(alumno: Alumno): void {
    if (!this.estaPresente(alumno)) this.alumnosInscriptos.push(alumno);
  }

  quitarAlumno(alumno: Alumno): void {
    if (this.estaPresente(alumno)) {
      this.alumnosInscriptos = this.alumnosInscriptos.filter((al) => al.legajo !== alumno.legajo);
    }
  }

  asignarDocente(docente: Docente): void {
    if (!this.estaPresente(docente)) this.docentesAsignados.push(docente);
  }

  getAlumnosInscriptos(): Alumno[] {
    return [...this.alumnosInscriptos];
  }

  getDocentesAsignados(): Docente[] {
    return [...this.docentesAsignados];
  }
}

export class Alumno extends Persona {
  private materias: Materia[] = [];

  constructor(legajo: number, nombre: string, apellido: string, email: string) {
    super(legajo, nombre, apellido, email);
  }

  inscribirse(materia: Materia): void {
    if (!materia.estaPresente(this)) {
      this.materias.push(materia);
      materia.inscribirAlumno(this);
    }
  }

  quitarMateria(materia: Materia): void {
    // TODO: quitar la materia de este alumno y avisarle a la materia
    // llamando a materia.quitarAlumno(this).
    if (materia.estaPresente(this)) {
      this.materias = this.materias.filter((mat) => mat.codigo !== materia.codigo);
      materia.quitarAlumno(this);
    }
  }

  getMaterias(): Materia[] {
    return [...this.materias];
  }

  obtenerInformacion(): string {
    return `Alumno: ${this.nombre} ${this.apellido}, Legajo ${this.legajo}, Materias inscriptas: ${this.materias}`;
  }
}

export class Docente extends Persona {
  private materiasAsignadas: Materia[] = [];

  constructor(
    legajo: number,
    nombre: string,
    apellido: string,
    email: string,
    public especialidad: string,
  ) {
    super(legajo, nombre, apellido, email);
    this.especialidad = especialidad;
  }

  asignarMateria(materia: Materia): void {
    if (!materia.estaPresente(this)) {
      this.materiasAsignadas.push(materia);
      materia.asignarDocente(this);
    }
  }

  getMateriasAsignadas(): Materia[] {
    return [...this.materiasAsignadas];
  }

  obtenerInformacion(): string {
    return `Docente ${this.nombre} ${this.apellido}, Legajo: ${this.legajo}, Especialidad: ${this.especialidad}, Materias Asignadas: ${this.materiasAsignadas}`;
  }
}
