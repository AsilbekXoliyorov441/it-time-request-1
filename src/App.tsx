// App.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "./components/ui/input";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Button } from "./components/ui/button";


export default function App() {
  const [gradientPos, setGradientPos] = useState({ x: 100, y: 100 });

  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      setGradientPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black px-2 sm:px-4">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Cursor gradient */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(
            250px circle at ${gradientPos.x}px ${gradientPos.y}px,
            rgba(147,51,234,0.4),
            transparent 80%
          )`,
        }}
      />

      {/* Animated glow */}
      <motion.div
        className="absolute -bottom-32 -right-32 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-purple-700/40 blur-[150px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Register Card */}
      <Card className="relative z-10 w-full max-w-md h-[95vh] flex flex-col bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl text-white">
        <CardHeader className="px-4 pt-4 pb-2">
          <CardTitle className="text-center text-lg md:text-2xl font-bold">
            Ro‘yxatdan o‘tish
          </CardTitle>
          <p className="text-center text-gray-300 text-xs md:text-sm mt-2 relative leading-relaxed">
            Bizning manzil{" "}
            <span className="relative font-bold px-2 py-1">
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-md blur-sm opacity-70 animate-pulse"></span>
              <span className="relative text-white">
                Toshkent shahri Bodomzor metro
              </span>
            </span>{" "}
            ro‘parasida joylashgan. Kela olsangiz formani to‘ldiring
          </p>
        </CardHeader>

        {/* Scrollable Content */}
        <CardContent className="flex-1 overflow-y-auto px-4 pb-4">
          <form className="space-y-3">
            {/* Ism */}
            <div>
              <Label className="text-gray-200 text-sm">Ismingiz</Label>
              <Input
                type="text"
                placeholder="Ismingizni kiriting"
                className="bg-white/10 border border-gray-500/40 text-white placeholder:text-gray-400 mt-1 text-sm"
              />
            </div>

            {/* Telegram */}
            <div>
              <Label className="text-gray-200 text-sm">Telegram username</Label>
              <Input
                type="text"
                placeholder="@username"
                className="bg-white/10 border border-gray-500/40 text-white placeholder:text-gray-400 mt-1 text-sm"
              />
            </div>

            {/* Telefon */}
            <div>
              <Label className="text-gray-200 text-sm">
                Telefon raqamingiz
              </Label>
              <Input
                type="tel"
                placeholder="+998"
                className="bg-white/10 border border-gray-500/40 text-white placeholder:text-gray-400 mt-1 text-sm"
              />
            </div>

            {/* Kurs haqida */}
            <p className="text-xs text-gray-300 leading-relaxed">
              Bizning kursimiz Toshkent shahrida joylashgan. Agar aniq kelib
              o‘qiy olsangiz, Toshkentni belgilang.
            </p>

            {/* Radio buttons */}
            <RadioGroup
              defaultValue="offline"
              className="grid grid-cols-2 gap-2 mt-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="offline"
                  id="offline"
                  className="w-5 h-5 rounded-full border-2 border-white data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                />
                <Label htmlFor="offline" className="text-sm">
                  Toshkentga bora olaman
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="online"
                  id="online"
                  className="w-5 h-5 rounded-full border-2 border-white data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                />
                <Label htmlFor="online" className="text-sm">
                  Onlayn
                </Label>
              </div>
            </RadioGroup>

            {/* Vaqt */}
            <div className="space-y-1 mt-2">
              <Label className="text-gray-200 text-sm">
                Qaysi vaqtda qatnasha olasiz?
              </Label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "10:00 - 12:00",
                  "15:00 - 17:00",
                  "17:00 - 19:00",
                  "19:00 - 21:00",
                ].map((time, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <Checkbox
                      id={`time-${i}`}
                      className="w-5 h-5 rounded-sm border-2 border-white data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                    />
                    <Label htmlFor={`time-${i}`} className="text-xs">
                      {time}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
            <Button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:scale-105 transition text-sm"
            >
              Yuborish
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
