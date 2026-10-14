import { site } from "@/lib/site";
import styles from "./WhatsAppButton.module.css";

/** WhatsApp digits only, no "+" or spaces (wa.me requires country code + number, no punctuation). */
const WHATSAPP_NUMBER = site.mobile.href.replace("tel:+", "");
const WHATSAPP_MESSAGE = "Hi Clinique Belle, I'd like to book a consultation.";

/** Fixed chat button, bottom-right of every page. Opens a pre-filled WhatsApp chat in a new tab. */
export default function WhatsAppButton() {
  return (
    <a
      className={styles.btn}
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Clinique Belle on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M16.004 3C9.096 3 3.5 8.596 3.5 15.504c0 2.37.656 4.586 1.797 6.48L3 29l7.182-2.264a12.42 12.42 0 0 0 5.822 1.452h.005c6.907 0 12.503-5.596 12.503-12.504C28.512 8.596 22.916 3 16.004 3Zm0 22.73h-.004a10.37 10.37 0 0 1-5.284-1.448l-.379-.225-3.953 1.247 1.267-3.854-.247-.396a10.33 10.33 0 0 1-1.59-5.55c0-5.728 4.663-10.39 10.395-10.39 2.776 0 5.385 1.082 7.347 3.046a10.316 10.316 0 0 1 3.043 7.35c0 5.728-4.663 10.22-10.595 10.22Zm5.68-7.636c-.31-.156-1.838-.908-2.123-1.012-.285-.104-.492-.156-.699.156-.207.311-.803 1.012-.984 1.22-.181.207-.362.233-.673.078-.31-.156-1.31-.483-2.495-1.54-.922-.823-1.545-1.84-1.726-2.151-.181-.311-.02-.48.136-.635.14-.14.31-.363.466-.544.155-.182.207-.311.31-.519.104-.207.052-.389-.026-.544-.078-.156-.699-1.686-.959-2.309-.253-.607-.51-.525-.699-.535-.181-.008-.389-.01-.596-.01s-.544.078-.829.389c-.285.311-1.088 1.063-1.088 2.594s1.114 3.01 1.269 3.218c.155.207 2.19 3.345 5.308 4.69.742.32 1.32.512 1.772.655.745.237 1.422.204 1.958.124.597-.089 1.838-.751 2.097-1.476.26-.726.26-1.348.182-1.477-.078-.13-.285-.207-.596-.363Z"
        />
      </svg>
    </a>
  );
}
