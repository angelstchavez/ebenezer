import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const EventRegister = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="tracking-tighter">Registrar evento</CardTitle>
        <CardDescription>
          Añade nuevos eventos con sus datos correspondientes
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter>
        <Button>Registrar</Button>
      </CardFooter>
    </Card>
  );
};

export default EventRegister;
