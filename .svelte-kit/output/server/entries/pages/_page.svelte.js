import { c as create_ssr_component, e as escape, d as add_attribute, f as each, v as validate_component } from "../../chunks/ssr.js";
const css = {
  code: ".progress-circle-container.svelte-v2njr{width:100%;height:100%}.progress-circle-slot.svelte-v2njr{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);z-index:1}.progress-circle.svelte-v2njr{transform:rotate(-90deg)}.progress-circle-animation.svelte-v2njr{transition:stroke-dasharray 0.2s,\n			stroke-dashoffset 0.2s}",
  map: '{"version":3,"file":"RadialProgress.svelte","sources":["RadialProgress.svelte"],"sourcesContent":["<script>import { fade } from \\"svelte/transition\\";\\nexport let data = [];\\nexport let maxTotalSize = data.reduce((sum, dataItem) => sum + dataItem.value, 0);\\nexport let thickness = 30;\\nexport let backgroundColor = \\"#D9D9D9\\";\\nexport let size = void 0;\\nlet rootElementWidth;\\nlet rootElementHeight;\\n$: validThickness = thickness * 2 > diameter ? diameter / 2 : thickness;\\n$: dataTotalSize = data.reduce((sum, dataItem) => sum + dataItem.value, 0);\\n$: diameter = size || Math.min(rootElementWidth, rootElementHeight);\\n$: validMaxTotalSize = dataTotalSize > maxTotalSize ? dataTotalSize : maxTotalSize;\\n$: circumference = 2 * Math.PI * (diameter / 2 - validThickness / 2);\\n$: progressData = data.map((dataItem, index) => {\\n  const value = dataItem.value / validMaxTotalSize * circumference;\\n  const offset = data.slice(0, index).reduce((sum, m) => sum + m.value / validMaxTotalSize * circumference, 0);\\n  return {\\n    ...dataItem,\\n    value,\\n    offset\\n  };\\n});\\n<\/script>\\n\\n<div\\n\\tbind:clientWidth={rootElementWidth}\\n\\tbind:clientHeight={rootElementHeight}\\n\\tclass=\\"progress-circle-container\\"\\n>\\n\\t{#if diameter}\\n\\t\\t<div\\n\\t\\t\\ttransition:fade={{ duration: 300 }}\\n\\t\\t\\tstyle=\\"position: relative; height: {diameter}px; width: {diameter}px;\\"\\n\\t\\t>\\n\\t\\t\\t<!-- Slot for the centered content -->\\n\\t\\t\\t<div class=\\"progress-circle-slot\\">\\n\\t\\t\\t\\t<slot />\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t<svg\\n\\t\\t\\t\\twidth=\\"100%\\"\\n\\t\\t\\t\\theight=\\"100%\\"\\n\\t\\t\\t\\tclass=\\"progress-circle\\"\\n\\t\\t\\t\\taria-label=\\"Radial progress visualization\\"\\n\\t\\t\\t\\trole=\\"img\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\t<!-- Background circle -->\\n\\t\\t\\t\\t<circle\\n\\t\\t\\t\\t\\tcx={diameter / 2}\\n\\t\\t\\t\\t\\tcy={diameter / 2}\\n\\t\\t\\t\\t\\tr={(diameter - validThickness) / 2}\\n\\t\\t\\t\\t\\tfill=\\"none\\"\\n\\t\\t\\t\\t\\tstroke={backgroundColor}\\n\\t\\t\\t\\t\\tstroke-width={validThickness}\\n\\t\\t\\t\\t\\trole=\\"presentation\\"\\n\\t\\t\\t\\t\\taria-label=\\"Radial progress background\\"\\n\\t\\t\\t\\t/>\\n\\n\\t\\t\\t\\t<!-- Progress circles -->\\n\\t\\t\\t\\t{#each progressData as progressDataItem}\\n\\t\\t\\t\\t\\t<circle\\n\\t\\t\\t\\t\\t\\tcx={diameter / 2}\\n\\t\\t\\t\\t\\t\\tcy={diameter / 2}\\n\\t\\t\\t\\t\\t\\tr={(diameter - validThickness) / 2}\\n\\t\\t\\t\\t\\t\\tfill=\\"none\\"\\n\\t\\t\\t\\t\\t\\tstroke={progressDataItem.color}\\n\\t\\t\\t\\t\\t\\tstroke-width={validThickness}\\n\\t\\t\\t\\t\\t\\tstroke-dasharray={`${progressDataItem.value} ${2 * Math.PI * ((diameter - validThickness) / 2) - progressDataItem.value}`}\\n\\t\\t\\t\\t\\t\\tstroke-dashoffset={-progressDataItem.offset}\\n\\t\\t\\t\\t\\t\\tclass=\\"progress-circle-animation\\"\\n\\t\\t\\t\\t\\t\\trole=\\"presentation\\"\\n\\t\\t\\t\\t\\t\\taria-label={`Progress ${progressDataItem.value} out of ${validMaxTotalSize} for ${progressDataItem.color}`}\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</svg>\\n\\t\\t</div>\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t.progress-circle-container {\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t}\\n\\n\\t.progress-circle-slot {\\n\\t\\tposition: absolute;\\n\\t\\tleft: 50%;\\n\\t\\ttop: 50%;\\n\\t\\ttransform: translate(-50%, -50%);\\n\\t\\tz-index: 1;\\n\\t}\\n\\n\\t.progress-circle {\\n\\t\\ttransform: rotate(-90deg);\\n\\t}\\n\\n\\t.progress-circle-animation {\\n\\t\\ttransition:\\n\\t\\t\\tstroke-dasharray 0.2s,\\n\\t\\t\\tstroke-dashoffset 0.2s;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAgFC,uCAA2B,CAC1B,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACT,CAEA,kCAAsB,CACrB,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,GAAG,CACT,GAAG,CAAE,GAAG,CACR,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAChC,OAAO,CAAE,CACV,CAEA,6BAAiB,CAChB,SAAS,CAAE,OAAO,MAAM,CACzB,CAEA,uCAA2B,CAC1B,UAAU,CACT,gBAAgB,CAAC,IAAI;AACxB,GAAG,iBAAiB,CAAC,IACpB"}'
};
const RadialProgress = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let validThickness;
  let dataTotalSize;
  let diameter;
  let validMaxTotalSize;
  let circumference;
  let progressData;
  let { data = [] } = $$props;
  let { maxTotalSize = data.reduce((sum, dataItem) => sum + dataItem.value, 0) } = $$props;
  let { thickness = 30 } = $$props;
  let { backgroundColor = "#D9D9D9" } = $$props;
  let { size = void 0 } = $$props;
  let rootElementWidth;
  let rootElementHeight;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.maxTotalSize === void 0 && $$bindings.maxTotalSize && maxTotalSize !== void 0) $$bindings.maxTotalSize(maxTotalSize);
  if ($$props.thickness === void 0 && $$bindings.thickness && thickness !== void 0) $$bindings.thickness(thickness);
  if ($$props.backgroundColor === void 0 && $$bindings.backgroundColor && backgroundColor !== void 0) $$bindings.backgroundColor(backgroundColor);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  $$result.css.add(css);
  diameter = size || Math.min(rootElementWidth, rootElementHeight);
  validThickness = thickness * 2 > diameter ? diameter / 2 : thickness;
  dataTotalSize = data.reduce((sum, dataItem) => sum + dataItem.value, 0);
  validMaxTotalSize = dataTotalSize > maxTotalSize ? dataTotalSize : maxTotalSize;
  circumference = 2 * Math.PI * (diameter / 2 - validThickness / 2);
  progressData = data.map((dataItem, index) => {
    const value = dataItem.value / validMaxTotalSize * circumference;
    const offset = data.slice(0, index).reduce((sum, m) => sum + m.value / validMaxTotalSize * circumference, 0);
    return { ...dataItem, value, offset };
  });
  return `<div class="progress-circle-container svelte-v2njr">${diameter ? `<div style="${"position: relative; height: " + escape(diameter, true) + "px; width: " + escape(diameter, true) + "px;"}"> <div class="progress-circle-slot svelte-v2njr">${slots.default ? slots.default({}) : ``}</div> <svg width="100%" height="100%" class="progress-circle svelte-v2njr" aria-label="Radial progress visualization" role="img"><circle${add_attribute("cx", diameter / 2, 0)}${add_attribute("cy", diameter / 2, 0)}${add_attribute("r", (diameter - validThickness) / 2, 0)} fill="none"${add_attribute("stroke", backgroundColor, 0)}${add_attribute("stroke-width", validThickness, 0)} role="presentation" aria-label="Radial progress background"></circle>${each(progressData, (progressDataItem) => {
    return `<circle${add_attribute("cx", diameter / 2, 0)}${add_attribute("cy", diameter / 2, 0)}${add_attribute("r", (diameter - validThickness) / 2, 0)} fill="none"${add_attribute("stroke", progressDataItem.color, 0)}${add_attribute("stroke-width", validThickness, 0)}${add_attribute("stroke-dasharray", `${progressDataItem.value} ${2 * Math.PI * ((diameter - validThickness) / 2) - progressDataItem.value}`, 0)}${add_attribute("stroke-dashoffset", -progressDataItem.offset, 0)} class="progress-circle-animation svelte-v2njr" role="presentation"${add_attribute("aria-label", `Progress ${progressDataItem.value} out of ${validMaxTotalSize} for ${progressDataItem.color}`, 0)}></circle>`;
  })}</svg></div>` : ``} </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let totalProgressData;
  let totalMax;
  let progressData = [{ value: 40, color: "#2B2EFF" }, { value: 20, color: "#1761FF" }];
  let maxTotalSize = 150;
  let thickness = 30;
  let containerHeight = 300;
  let containerWidth = 300;
  let backgroundColor = "#D6D6D6";
  const ssr = false;
  if ($$props.ssr === void 0 && $$bindings.ssr && ssr !== void 0) $$bindings.ssr(ssr);
  totalProgressData = progressData.reduce((acc, curr) => acc + curr.value, 0);
  totalMax = totalProgressData > maxTotalSize ? totalProgressData : maxTotalSize;
  return `<div class="w-screen h-screen bg-gradient-to-r from-sky-500 to-indigo-500 font-mono overflow-scroll"><h1 class="text-white text-4xl font-bold py-4 pt-8 text-center" data-svelte-h="svelte-16lvtk9">🤗 Svelte Radial Progress</h1> <div class="p-2 flex flex-wrap sm:justify-evenly justify-start"><div class="flex flex-col p-8"><h2 class="text-white text-lg font-bold" data-svelte-h="svelte-m2dp5u">Radial progress</h2> <div class="flex mt-2"><label for="maxTotalSize" class="text-white mr-2" data-svelte-h="svelte-rbukec">Max total size</label> <input class="w-40" id="maxTotalSize" type="range" min="0"${add_attribute("max", 500, 0)}${add_attribute("value", maxTotalSize, 0)}></div> <div class="flex mt-2"><label for="maxTotalSize" class="text-white mr-2" data-svelte-h="svelte-1vk2i1n">Thickness</label> <input class="w-40" id="maxTotalSize" type="range" min="1" max="300"${add_attribute("value", thickness, 0)}></div> <div class="flex mt-2"><label for="backgroundColor" class="text-white mr-2" data-svelte-h="svelte-co1fhg">Background color</label> <input class="bg-transparent" id="backgroundColor" type="color"${add_attribute("value", backgroundColor, 0)}></div></div> <div class="flex flex-col p-8"><h2 class="text-white text-lg font-bold" data-svelte-h="svelte-gf650h">Parent Container</h2> <div class="flex items-center mt-2"><label for="containerHeight" class="text-white mr-2" data-svelte-h="svelte-ps07kt">Height</label> <input class="w-40" id="containerHeight" type="range" min="200" max="500"${add_attribute("value", containerHeight, 0)}></div> <div class="flex items-center mt-2"><label for="containerWidth" class="text-white mr-2" data-svelte-h="svelte-qm90pt">Width</label> <input class="w-40" id="containerWidth" type="range" min="200" max="500"${add_attribute("value", containerWidth, 0)}></div></div> <div class="flex flex-col p-8"><h2 class="text-white text-lg font-bold mb-2">Progress Bars
				<button class="bg-blue-700 hover:bg-blue-600 text-white text-sm font-bold rounded w-6 h-6 ml-2" data-svelte-h="svelte-b4ibk9">+</button></h2> <div class="flex flex-row flex-wrap gap-4 max-w-md">${each(progressData, (data, index) => {
    return `<div><input class="mr-4 bg-transparent" type="color"${add_attribute("value", data.color, 0)}> <input id="${"value-" + escape(index, true)}" type="range" min="1" max="50"${add_attribute("value", data.value, 0)}> </div>`;
  })}</div></div></div> <div class="flex items-center justify-center mt-4 mb-4"><div style="${"height: " + escape(containerHeight, true) + "px; width: " + escape(containerWidth, true) + "px;"}" class="border-2 border-white p-4 rounded-lg">${validate_component(RadialProgress, "RadialProgress").$$render(
    $$result,
    {
      data: progressData,
      maxTotalSize,
      thickness,
      backgroundColor
    },
    {},
    {
      default: () => {
        return `<div class="flex flex-col items-center justify-center"><div class="text-white text-lg font-bold" data-svelte-h="svelte-17d6eh5">Storage</div> <div class="text-white text-lg">${escape(totalProgressData)}/${escape(totalMax)}GB</div></div>`;
      }
    }
  )}</div></div></div>`;
});
export {
  Page as default
};
