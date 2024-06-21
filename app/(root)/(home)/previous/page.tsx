import CallList from "@/components/CallList";
import React from "react";

const PreviousPage = () => {
    return (
        <section className=" flex flex-col size-full gap-10 text-white">
          <div className="text-3xl font-bold">
            Previous
          </div>

          <CallList type="ended"/>
        </section>
        );
};

export default PreviousPage;
