import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import { Plus, List, Check, CircleX } from "lucide-react";

const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-lg p-2">
        <div className="flex gap-2">
          <Input placeholder="Adicionar tarefa" />
          <Button variant="outline" className="cursor-pointer">
            <Plus /> Cadastrar
          </Button>
        </div>

        <Separator />

        <div>
          <Badge>
            <List />
            todas
          </Badge>
          <Badge>
            <CircleX />
            Não Finalizadas
          </Badge>
          <Badge>
            <Check />
            Concluidas
          </Badge>
        </div>
      </Card>
    </main>
  );
};

export default Home;
