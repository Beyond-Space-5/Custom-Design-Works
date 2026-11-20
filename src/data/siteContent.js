export const BRAND_INFO = {
  name: "Custom Design Works",
  tagline: "Embedded Firmware & 3D CAD Design"
};

export const CONTACT_INFO = {
  primaryPhone: "0796692113",
  secondaryPhone: "0794045008",
  whatsapp: "0796692113",
  whatsappClean: "254796692113",
  location: "Nairobi, Kenya"
};

export const SERVICES = [
  {
    id: "firmware",
    number: "01",
    title: "Embedded Firmware Development",
    image: "/services/firmware.png",
    imageAlt: "AquaMind Garden embedded controller with OLED display and C firmware code",
    summary:
      "Production firmware and real-time operating system (RTOS) architectures specializing in microcontroller programming, reliable peripheral drivers, and secure telemetry.",
    bullets: [
      {
        lead: "32-Bit Microcontrollers & Wireless SoCs:",
        text: "Hardware abstraction, and multi-tasking RTOS architectures aligning with MISRA Standards."
      },
      {
        lead: "Peripherals & Buses:",
        text: "DMA-backed and Interrupt Driven UART, SPI, I2C, CAN bus, and circular ADC sampling buffers."
      },
      {
        lead: "Wireless & Telemetry:",
        text: "Encrypted peer-to-peer wireless links, Wi-Fi connectivity, and real-time web server telemetry."
      }
    ],
    tags: "Firmware development • RTOS"
  },
  {
    id: "pcb",
    number: "02",
    title: "PCB Design",
    image: "/services/pcb-design.png",
    imageAlt: "Custom multi-layer PCB layout and 3D component render",
    summary:
      "Professional schematic capture, multi-layer printed circuit board layout, and manufacturing-ready Gerber outputs optimized for signal integrity and component reliability.",
    bullets: [
      {
        lead: "Schematic Capture & Component Selection:",
        text: "Rigorous component engineering, footprint verification, and schematic netlist design."
      },
      {
        lead: "Multi-Layer PCB Layout:",
        text: "Controlled impedance routing, ground plane management, and high-speed signal integrity."
      },
      {
        lead: "Manufacturing Deliverables:",
        text: "Complete Gerber/ODB++ production files, BOM lists, and pick-and-place assembly files."
      }
    ],
    tags: "Schematic • Layout • Gerber • BOM"
  },
  {
    id: "cad",
    number: "03",
    title: "3D CAD Modeling and Sheet Metal Design with Detailed 2D Drawings",
    image: "/services/cad-design.png",
    imageAlt: "Parametric 3D CAD structural frame assembly and engineering drawings",
    summary:
      "Parametric 3D mechanical modeling, assemblies, sheet metal designs, and detailed technical documentation optimized for manufacturing.",
    bullets: [
      {
        lead: "Parametric Modeling & Assemblies:",
        text: "Parametric part modelling, multi-part mechanical assemblies, and mould design."
      },
      {
        lead: "Sheet Metal & Frame Design:",
        text: "Sheet metal components, structural frames, and fabrication-ready designs."
      },
      {
        lead: "DFM & DFA Principles:",
        text: "Design optimization for 3D printing, sheet metal fabrication, and CNC machining, including protective electronics enclosures."
      }
    ],
    tags: "Parametric 3D CAD • STEP / STL • Deatiled 2D Drawings"
  }
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Requirement & Architecture",
    description:
      "Defining hardware specs, peripheral mapping, pinout allocation, and selecting optimal microcontroller or CAD topology."
  },
  {
    step: "02",
    title: "Rapid Prototyping",
    description:
      "Writing modular, production-grade C/C++ firmware or drafting precise parametric 3D assemblies with iterative feedback."
  },
  {
    step: "03",
    title: "Rigorous Testing",
    description:
      "Validating signal integrity, DMA transfers, memory safety, and structural/thermal tolerances under real-world conditions."
  },
  {
    step: "04",
    title: "Deployment & Handover",
    description:
      "Delivering fully documented source code, binary firmware images, production-ready CAD files, and technical handover."
  }
];