"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Workshop } from "../types/workshop.types";
import { WorkshopCard } from "./Workshop_card";

/* ── Constantes ─────────────────────────────── */
const CARDS_PER_PAGE = 3;
const AUTO_DELAY_MS  = 6500;

type Props = {
  workshops: Workshop[];
};

export function WorkshopCarousel({ workshops }: Props) {
 
  
}