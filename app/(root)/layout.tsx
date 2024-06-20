import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import React, { Children, ReactNode } from "react";

export const metadata: Metadata = {
  title: "VirtuMeet",
  description: "Video conferencing app",
  icons:{
    icon:"/icons/logo.svg",
  }
};


const MeetingLayout = ({children}:{children:ReactNode}) => {
  return(
    <main>
      <StreamVideoProvider>
      {children}

      </StreamVideoProvider>
      
    </main>
  );
};

export default MeetingLayout;
