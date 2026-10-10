import { routes, type Route } from "@/lib/routes";

/** Doctor facts, copied verbatim from the consultant's HTML files. Every credential needs clinic sign-off before launch. */
export type Doctor = {
  id: string;
  name: string;
  title: string;
  credentials: string;
  photo: string;
  photoAlt: string;
  bioHome: string;
  bioAbout: string;
  profile: Route;
};

const UPLOADS = "https://cliniquebelle.in/wp-content/uploads";

export const drSrikanth: Doctor = {
  id: "dr-srikanth-v",
  name: "Dr. Srikanth V",
  title: "Consultant Plastic & Cosmetic Surgeon",
  credentials: "MBBS, MS, MCh, DNB, FRCS (Edin), FRCS (Glasg)",
  photo: `${UPLOADS}/2022/03/T1.jpg`,
  photoAlt: "Dr. Srikanth V, Consultant Plastic and Cosmetic Surgeon",
  bioHome:
    "Specialises in cosmetic surgery, hair transplantation, reconstructive microsurgery, super-microsurgery and hand surgery. Senior Consultant, Plastic, Cosmetic & Reconstructive Surgery, Manipal Hospitals; formerly Associate Professor at St. John's Medical College, Bangalore. Author of over a dozen papers in peer-reviewed surgical journals.",
  bioAbout:
    "Senior Consultant, Plastic, Cosmetic & Reconstructive Surgery, Manipal Hospitals; formerly Associate Professor at St. John's Medical College, Bangalore. Specialises in cosmetic surgery, hair transplantation, reconstructive microsurgery and hand surgery, with 12+ papers published in peer-reviewed journals.",
  profile: routes.drSrikanth,
};

export const drAnupama: Doctor = {
  id: "dr-anupama-t-srikanth",
  name: "Dr. Anupama T Srikanth",
  title: "Consultant Anaesthetist, Intensivist & Pain Specialist",
  credentials: "Consultant Anaesthetist, Intensivist & Pain Specialist",
  photo: `${UPLOADS}/2022/05/3804fa41-f049-40d9-bfaa-00ae5b10c13a.jpg`,
  photoAlt: "Dr. Anupama T Srikanth, Consultant Anaesthetist",
  bioHome:
    "Trained in anaesthesiology at the Sir JJ Group of Hospitals and Grant Medical College, Mumbai, with further experience at Tata Memorial Hospital and Royal Glamorgan Hospital, Cardiff. WHO-certified in pain and palliative medicine. Senior Consultant at Manipal Hospitals, overseeing patient safety and comfort through every procedure.",
  bioAbout:
    "Trained at the Sir JJ Group of Hospitals, Mumbai, with further experience at Tata Memorial Hospital and Royal Glamorgan Hospital, Cardiff. WHO-certified in pain and palliative medicine. Oversees patient safety and comfort through every procedure.",
  profile: routes.drAnupama,
};

export const doctors = [drSrikanth, drAnupama] as const;
