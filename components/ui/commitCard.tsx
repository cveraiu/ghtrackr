"use client";
import React from "react";
import { Commit } from "@/types/commit";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  commit: Commit;
}

export default function CommitCard(props: Props) {
  const commit = props.commit;
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full bg-[#d7e5df] rounded-lg hover:bg-[#b5cfc4] text-center"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex justify-center">
          <nav>
            {commit.commit.author.name} - {commit.commit.author.date}
          </nav>
        </AccordionTrigger>
        <AccordionContent>
          <nav className="break-words">Message: {commit.commit.message}</nav>
          <nav className="break-words">Sha: {commit.sha}</nav>
          <nav className="break-words">Node id: {commit.node_id}</nav>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
