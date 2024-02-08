import { TProjectInfo } from "./staticInfo";

type TUpdateModal = (p: TProjectInfo) => void;

export function createModalProject(
  project: TProjectInfo,
  updateModal: TUpdateModal,
) {
  const folder = document.getElementById("folder") as HTMLDivElement;

  const projectElement = Object.assign(document.createElement("div"), {
    className: "project",
    innerHTML: project.name,
    onclick: () => updateModal(project),
  });

  projectElement.style.setProperty(
    "background-image",
    `url('${project.images[0]}')`,
  );

  folder.appendChild(projectElement);
}
