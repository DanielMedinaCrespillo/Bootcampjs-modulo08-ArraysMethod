type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

//Apartado 1 A

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesPediatria: Pacientes[] = pacientes.filter(
    (pacientes: Pacientes) => pacientes.especialidad === "Pediatra"
  );
  return pacientesPediatria;
};

console.log(
  "Pacientes de Pediatria:",
  obtenPacientesAsignadosAPediatria(pacientes)
);

//Apartado 1 B

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesPediatria: Pacientes[] = pacientes.filter(
    (pacientes: Pacientes) =>
      pacientes.especialidad === "Pediatra" && pacientes.edad < 10
  );
  return pacientesPediatria;
};

console.log(
  "Pacientes de Pediatria menor de 10 años:",
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes)
);

//Apartado 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProtocolo = false;
  if (
    pacientes.some(
      (paciente: Pacientes) =>
        paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
    )
  ) {
    activarProtocolo = true;
  }

  return activarProtocolo;
};

console.log(
  "Protocolo de urgencias si el paciente sobrepasa de 100 frecuencia cardiaca y 39 de temperatura:",
  activarProtocoloUrgencia(pacientes)
);

//Apartado 3

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const modificacionDePacientesPediatra: Pacientes[] = pacientes.map(
    (pacientes: Pacientes) => {
      if (pacientes.especialidad === "Pediatra") {
        return {
          ...pacientes,
          especialidad: "Medico de familia",
        };
      }
      return pacientes;
    }
  );
  return modificacionDePacientesPediatra;
};

console.log(
  "Pacientes de Pediatria modificados a Medico de familia",
  reasignaPacientesAMedicoFamilia(pacientes)
);

//Apartado 4

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  const pacientesEnPediatria: boolean = pacientes.some(
    (pacientes: Pacientes) => pacientes.especialidad === "Pediatra"
  );
  return pacientesEnPediatria;
};

console.log(
  "Pacientes asignados a pediatria:",
  HayPacientesDePediatria(pacientes)
);

//Apartado 5

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  return pacientes.reduce<NumeroPacientesPorEspecialidad>(
    (acc, pacientes) => {
      switch (pacientes.especialidad) {
        case "Medico de familia":
          acc.medicoDeFamilia++;
          break;
        case "Cardiólogo":
          acc.cardiologia++;
          break;
        case "Pediatra":
          acc.pediatria++;
          break;
      }
      return acc;
    },
    {
      medicoDeFamilia: 0,
      pediatria: 0,
      cardiologia: 0,
    }
  );
};

console.log(
  "Total de pacientes por especialidad:",
  cuentaPacientesPorEspecialidad(pacientes)
);
