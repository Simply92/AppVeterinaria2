import { usePatientStore } from "../store/store"
import PatientDetail from "./PatientDetail"

const PatientList = () => {
    const { patients } = usePatientStore()
    return (
        <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
            {patients.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center font-bold">Administra tus pacientes y citas</p>
                    {patients.map(patient => (
                        <PatientDetail
                            key={patient.id}
                            patient={patient} />
                    ))}
                </>

            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center font-bold">Comienza agregando pacientes</p>
                </>
            )}
        </div>
    )
}

export default PatientList
