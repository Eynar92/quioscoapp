import Image from "next/image"
import useQuiosco from "../../../../pages/api/hooks/useQuiosco"
import Categoria from "../Categoria/Categoria"

const Sidebar = () => {
    const { categorias } = useQuiosco()
    console.log(categorias);

    return (
        <>
            <Image
                width={300}
                height={100}
                src="/assets/img/logo.svg"
                alt="Imagen logotipo"
            />

            <nav className="mt-10">
                {categorias.map(categoria => (
                    <Categoria
                        key={categoria.id}
                        categoria={categoria}
                    />
                ))}
            </nav>
        </>
    )
}

export default Sidebar
