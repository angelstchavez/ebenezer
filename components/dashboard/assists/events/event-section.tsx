import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventRegister from "./event-register";
import EventConsult from "./event-consult";
import EventStatistics from "./event-statistics";

const EventSection = () => {
  return (
    <div className="mt-4 flex flex-1 flex-col gap-2 p-4 pt-0">
      <h2 className="text-2xl md:text-2xl font-bold tracking-tighter bg-gradient-to-b from-blue-700 to-blue-950 text-transparent bg-clip-text">
        Administrar Eventos
      </h2>
      <Tabs>
        <TabsList defaultValue="stadistics">
          <TabsTrigger value="stadistics">Estadisticas</TabsTrigger>
          <TabsTrigger value="register">Registrar</TabsTrigger>
          <TabsTrigger value="consult">Consultar</TabsTrigger>
        </TabsList>
        <TabsContent value="stadistics" className="w-full">
          <EventStatistics />
        </TabsContent>
        <TabsContent value="register" className="w-full">
          <EventRegister />
        </TabsContent>
        <TabsContent value="consult" className="w-full">
          <EventConsult />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EventSection;
