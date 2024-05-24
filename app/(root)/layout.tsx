import React, { Children, ReactNode } from "react";

const MeetingLayout = ({children}:{children:ReactNode}) => {
  return(
    <main>
      
      {children}
      
    </main>
  );
};

export default MeetingLayout;
