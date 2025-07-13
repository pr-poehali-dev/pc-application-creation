import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("menu");
  const [playerLevel, setPlayerLevel] = useState(15);
  const [playerCoins, setPlayerCoins] = useState(2450);
  const [playerExp, setPlayerExp] = useState(3420);
  const [expToNext, setExpToNext] = useState(4000);

  const weapons = [
    {
      id: 1,
      name: "AK-47",
      category: "Автоматы",
      price: 2700,
      damage: 85,
      accuracy: 72,
      fire_rate: 75,
    },
    {
      id: 2,
      name: "M4A4",
      category: "Автоматы",
      price: 3100,
      damage: 83,
      accuracy: 88,
      fire_rate: 78,
    },
    {
      id: 3,
      name: "AWP",
      category: "Снайперские",
      price: 4750,
      damage: 95,
      accuracy: 95,
      fire_rate: 25,
    },
    {
      id: 4,
      name: "Desert Eagle",
      category: "Пистолеты",
      price: 700,
      damage: 78,
      accuracy: 65,
      fire_rate: 45,
    },
  ];

  const leaderboard = [
    { rank: 1, name: "ProGamer2024", score: 12450, level: 42 },
    { rank: 2, name: "SniperElite", score: 11890, level: 38 },
    { rank: 3, name: "RushMaster", score: 10240, level: 35 },
    { rank: 4, name: "TacticalGhost", score: 9750, level: 32 },
    { rank: 5, name: "FragHunter", score: 8900, level: 29 },
  ];

  const renderMainMenu = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
      <div className="text-center max-w-4xl w-full">
        <div className="mb-8">
          <h1
            className="text-6xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent"
            style={{ fontFamily: "Orbitron" }}
          >
            TACTICAL STRIKE
          </h1>
          <p className="text-xl text-slate-400 font-light">
            Шутер от первого лица
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Button
            size="lg"
            className="h-16 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold shadow-lg transform hover:scale-105 transition-all"
            onClick={() => setCurrentSection("singleplayer")}
          >
            <Icon name="Target" className="mr-2" />
            Одиночная игра
          </Button>

          <Button
            size="lg"
            className="h-16 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold shadow-lg transform hover:scale-105 transition-all"
            onClick={() => setCurrentSection("multiplayer")}
          >
            <Icon name="Users" className="mr-2" />
            Мультиплеер
          </Button>

          <Button
            size="lg"
            className="h-16 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-semibold shadow-lg transform hover:scale-105 transition-all"
            onClick={() => setCurrentSection("shop")}
          >
            <Icon name="ShoppingCart" className="mr-2" />
            Магазин
          </Button>

          <Button
            size="lg"
            className="h-16 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-semibold shadow-lg transform hover:scale-105 transition-all"
            onClick={() => setCurrentSection("leaderboard")}
          >
            <Icon name="Trophy" className="mr-2" />
            Рейтинги
          </Button>
        </div>

        <div className="flex justify-center">
          <img
            src="/img/bc521390-c94a-4a89-b498-53a74939b0b5.jpg"
            alt="Tactical Weapon"
            className="w-96 h-64 object-cover rounded-lg shadow-2xl border border-slate-700"
          />
        </div>
      </div>
    </div>
  );

  const renderPlayerProfile = () => (
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center">
            <Icon name="User" size={32} className="text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">ProGamer2024</h3>
            <p className="text-slate-400">Уровень {playerLevel}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="DollarSign" className="text-yellow-500" />
            <span className="text-white font-bold">
              {playerCoins.toLocaleString()}
            </span>
          </div>
          <Badge variant="secondary" className="bg-slate-700 text-slate-200">
            {playerExp} / {expToNext} EXP
          </Badge>
        </div>
      </div>
      <Progress value={(playerExp / expToNext) * 100} className="h-2" />
    </div>
  );

  if (currentSection === "menu") return renderMainMenu();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="outline"
            onClick={() => setCurrentSection("menu")}
            className="border-slate-600 text-slate-300 hover:bg-slate-800"
          >
            <Icon name="ArrowLeft" className="mr-2" />
            Назад в меню
          </Button>
          <h1
            className="text-3xl font-bold text-white"
            style={{ fontFamily: "Orbitron" }}
          >
            TACTICAL STRIKE
          </h1>
        </div>

        {renderPlayerProfile()}

        <Tabs
          value={currentSection}
          onValueChange={setCurrentSection}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-4 bg-slate-800 border-slate-700">
            <TabsTrigger
              value="singleplayer"
              className="text-white data-[state=active]:bg-orange-600"
            >
              Одиночная игра
            </TabsTrigger>
            <TabsTrigger
              value="multiplayer"
              className="text-white data-[state=active]:bg-blue-600"
            >
              Мультиплеер
            </TabsTrigger>
            <TabsTrigger
              value="shop"
              className="text-white data-[state=active]:bg-amber-600"
            >
              Магазин
            </TabsTrigger>
            <TabsTrigger
              value="leaderboard"
              className="text-white data-[state=active]:bg-purple-600"
            >
              Рейтинги
            </TabsTrigger>
          </TabsList>

          <TabsContent value="singleplayer" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Icon name="Crosshair" className="mr-2 text-orange-500" />
                    Учебка
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 mb-4">
                    Изучи основы стрельбы и тактики
                  </p>
                  <Button
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    onClick={() =>
                      alert(
                        "🎯 Учебка запущена! Добро пожаловать в тренировочный режим!",
                      )
                    }
                  >
                    Начать
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Icon name="Target" className="mr-2 text-blue-500" />
                    Миссии
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 mb-4">Сюжетная кампания</p>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => alert("🎮 Сюжетная кампания загружается...")}
                  >
                    Продолжить
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Icon name="Zap" className="mr-2 text-purple-500" />
                    Испытания
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 mb-4">
                    Сложные задания для опытных
                  </p>
                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    onClick={() =>
                      alert(
                        "⚡ Испытания доступны только для игроков 20+ уровня!",
                      )
                    }
                  >
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="multiplayer" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Icon name="Swords" className="mr-2 text-red-500" />
                    Быстрая игра
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 mb-4">Найти случайную игру</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Онлайн игроков:</span>
                      <span className="text-green-400">15,432</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Активные серверы:</span>
                      <span className="text-blue-400">1,247</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-red-600 hover:bg-red-700"
                    onClick={() =>
                      alert("🔍 Поиск игры... Подключение к серверу...")
                    }
                  >
                    Искать игру
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Icon name="Users" className="mr-2 text-green-500" />
                    Комнаты
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 mb-4">
                    Создать или присоединиться
                  </p>
                  <div className="space-y-2 mb-4">
                    <Button
                      variant="outline"
                      className="w-full border-slate-600 text-slate-300"
                      onClick={() => alert("🏠 Создание комнаты...")}
                    >
                      Создать комнату
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-slate-600 text-slate-300"
                      onClick={() => alert("🔎 Поиск доступных комнат...")}
                    >
                      Найти комнату
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="shop" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {weapons.map((weapon) => (
                <Card
                  key={weapon.id}
                  className="bg-slate-800 border-slate-700 hover:border-orange-500 transition-colors"
                >
                  <CardHeader>
                    <CardTitle className="text-white text-lg">
                      {weapon.name}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="w-fit bg-slate-700 text-slate-300"
                    >
                      {weapon.category}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Урон:</span>
                        <span className="text-white">{weapon.damage}%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Точность:</span>
                        <span className="text-white">{weapon.accuracy}%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">
                          Скорострельность:
                        </span>
                        <span className="text-white">{weapon.fire_rate}%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Icon
                          name="DollarSign"
                          className="text-yellow-500"
                          size={16}
                        />
                        <span className="text-white font-bold">
                          {weapon.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-amber-600 hover:bg-amber-700"
                      disabled={playerCoins < weapon.price}
                      onClick={() => {
                        if (playerCoins >= weapon.price) {
                          setPlayerCoins(playerCoins - weapon.price);
                          alert(
                            `🔫 ${weapon.name} куплено! Новый баланс: ${(playerCoins - weapon.price).toLocaleString()}`,
                          );
                        }
                      }}
                    >
                      {playerCoins >= weapon.price
                        ? "Купить"
                        : "Недостаточно монет"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="leaderboard" className="mt-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="Trophy" className="mr-2 text-yellow-500" />
                  Топ игроков
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((player) => (
                    <div
                      key={player.rank}
                      className="flex items-center justify-between p-4 bg-slate-700 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                            player.rank === 1
                              ? "bg-yellow-500 text-yellow-900"
                              : player.rank === 2
                                ? "bg-gray-400 text-gray-900"
                                : player.rank === 3
                                  ? "bg-amber-600 text-amber-900"
                                  : "bg-slate-600 text-slate-200"
                          }`}
                        >
                          {player.rank}
                        </div>
                        <div>
                          <p className="text-white font-semibold">
                            {player.name}
                          </p>
                          <p className="text-slate-400 text-sm">
                            Уровень {player.level}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-bold">
                          {player.score.toLocaleString()}
                        </p>
                        <p className="text-slate-400 text-sm">очков</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
