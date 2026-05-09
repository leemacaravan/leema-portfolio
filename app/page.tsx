"use client";

import { useState } from "react";
import Loader from "@/app/components/hub/Loader";
import HubScene from "@/app/components/hub/HubScene";
import TopUI from "@/app/components/shared/TopUI";
import AchievementsPanel from "@/app/components/shared/AchievementsPanel";
import Toast from "@/app/components/shared/Toast";

export default function Home() {
  const [hubVisible, setHubVisible] = useState(false);

  return (
    <>
      <Loader onDone={() => setHubVisible(true)} />
      <HubScene visible={hubVisible} />
      {hubVisible && (
        <>
          <TopUI />
          <AchievementsPanel />
          <Toast />
        </>
      )}
    </>
  );
}
