import { Card, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";

export default function CardSubscription() {
    return (
        <Card className="max-w-[400px] mt-4">
            <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                    <p className="text-xl font-bold">Suscríbete a PREMIUM</p>
                </div>
            </CardHeader>
            <CardBody>
                <p>Suscríbete para desbloquear nuevas funciones y, si eres elegible, recibir un pago de cuota de ingresos por anuncios.</p>
            </CardBody>
            <CardFooter>
                <Button className="bg-sky-500 font-bold text-md rounded-full px-5 py-2">Suscribirse</Button>
            </CardFooter>
        </Card>
    );
}
