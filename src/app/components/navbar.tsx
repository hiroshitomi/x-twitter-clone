export default function NavBar() {
    return (
        <nav className="flex flex-col my-10">
            <ul className="font-bold text-xl flex flex-col items-start gap-y-4">
                <li className="cursor-pointer">Inicio</li>
                <li className="cursor-pointer">Explorar</li>
                <li className="cursor-pointer">Notificaciones</li>
                <li className="cursor-pointer">Mensajes</li>
                <li className="cursor-pointer">Listas</li>
                <li className="cursor-pointer">Premium</li>
                <li className="cursor-pointer">Perfil</li>
                <li className="cursor-pointer">Más opciones</li>
            </ul>
        </nav>
    )
}