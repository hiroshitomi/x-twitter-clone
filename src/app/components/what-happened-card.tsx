import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";

export default function WhatHappenedCard() {
    return (
        <Card className="max-w-[400px] mt-4">
            <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                    <p className="text-xl font-bold">Qué está pasando</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <div className="py-2">
                    <h5 className="font-bold">#ViajáALaFinalUCL</h5>
                    <p className="mb-3 text-xs text-white/40">Viajá con Heineken a la final</p>
                    <Divider />
                </div>
                <div>
                    <p className="text-sm">UEFA Europa League · Tendencia</p>
                    <h5 className="font-bold">Cavani</h5>
                    <p className="mb-3 text-xs text-white/40">29,1 mil posts</p>
                    <Divider />
                </div>
                <div>
                    <p className="text-sm mt-3">Negocios &  finanzas · Tendencia</p>
                    <h5 className="font-bold">Halving</h5>
                    <p className="text-xs text-white/40">157 mil posts</p>
                </div>
            </CardBody>
            <Divider />
            <CardFooter>
                <Button>
                    Mostrar mas
                </Button>
            </CardFooter>
        </Card>
    );
}
