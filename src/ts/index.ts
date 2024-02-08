import { handlerModal } from "./modal";
//import { navBarHandler } from "./navbar";
import { createModalProject } from "./projects";
import { staticInfoVisible } from "./staticInfo";
import { getElementById } from "./utils";

for (const project of staticInfoVisible) {
  createModalProject(project, handlerModal.update.bind(handlerModal));
}

const copyRight = getElementById("copyright") as HTMLParagraphElement;
copyRight.innerHTML = `Sion Ramos de los Santos © ${new Date().getFullYear()}`;
