import { component$ } from "@qwik.dev/core";
import type { DocumentHead } from "@qwik.dev/router";

import styles from "./index.module.css";

import Lockup from "~/assets/lockup.svg?jsx";

export default component$(() => {
  return (
    <main>
      <Lockup class={styles.lockup} />
    </main>
  );
});

export const head: DocumentHead = () => ({
  title: "Kafo",
  meta: [
    {
      name: "description",
      content: "Kafo Website",
    },
  ],
});
