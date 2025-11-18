import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import {
  Plus,
  List,
  Check,
  CircleX,
  SquarePen,
  Trash,
  ListChecks,
  Sigma,
} from "lucide-react";

const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-lg p-4">
        <CardHeader className="flex gap-2">
          <Input placeholder="Adicionar tarefa" />
          <Button variant="default" className="cursor-pointer">
            <Plus /> Cadastrar
          </Button>
        </CardHeader>

        <CardContent>
          <Separator className="mb-4" />

          <div className="flex gap-2">
            <Badge className="cursor-pointer" variant="default">
              <List />
              Todas
            </Badge>
            <Badge className="cursor-pointer" variant="outline">
              <CircleX />
              Não Finalizadas
            </Badge>
            <Badge className="cursor-pointer" variant="outline">
              <Check />
              Concluidas
            </Badge>
          </div>

          <div className="mt-4 border-b">
            <div className="h-14 flex justify-between items-center border-t">
              <div className="w-2 h-full bg-green-300"></div>
              <p className="flex-1 px-2 text-sm">Estudar React</p>
              <div className="flex gap-2 items-center">
                <SquarePen size={16} className="cursor-pointer" />
                <Trash size={16} className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex gap-2 items-center">
              <ListChecks size={18} />
              <p className="text-xs">Tarefas Concluídas (3/3)</p>
            </div>
            <Button className="text-xs h-7 cursor-pointer" variant={"outline"}>
              <Trash />
              Limpar tarefas concluídas
            </Button>
          </div>
          <div className="h-2 w-full bg-gray-100 mt-4 rounded-md">
            <div className="h-full bg-blue-500 rounded-md" style={{width: "50%"}}></div>
          </div>
          <div>
            <Sigma/>
            <p>3 tarefas pendentes</p>
          </div>
        </CardContent>
        <div></div>
      </Card>
    </main>
  );
};

export default Home;
