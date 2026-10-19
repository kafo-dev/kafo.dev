import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import styles from "./index.module.css";

import Lockup from "~/assets/lockup.svg?jsx";

export default component$(() => {
  return (
    <main>
      <Lockup class={styles.lockup} />
    </main>
  );
});

export const head: DocumentHead = {
  title: "Kafo",
  meta: [
    {
      name: "description",
      content: "Kafo Website",
    },
  ],
};
