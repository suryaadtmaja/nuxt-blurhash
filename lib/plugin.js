import Vue from "vue";
import NuxtBlurhash from <%= serialize(options.components.NuxtBlurhash) %>;
import NuxtBlurImage from <%= serialize(options.components.NuxtBlurImage) %>;

export default async function ({ router, store }) {
  Vue.component("NuxtBlurhash", NuxtBlurhash);
  Vue.component("NuxtBlurImage", NuxtBlurImage);
}
