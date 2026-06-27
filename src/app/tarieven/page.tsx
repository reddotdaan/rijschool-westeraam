import type { Metadata } from "next";
import { TarievenHub } from "@/components/tarieven/tarieven-hub";

export const metadata: Metadata = {
  title: "Tarieven",
  description:
    "Bekijk de tarieven van Rijschool Westeraam per opleiding — auto, motor, scooter (AM) en aanhangwagen (BE) in Elst, Arnhem en Nijmegen.",
};

export default function TarievenPage() {
  return <TarievenHub />;
}
