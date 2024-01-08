import { handlerModal } from "./modal";
//import { navBarHandler } from "./navbar";
import { createModalProject } from "./projects";
import { staticInfoVisible } from "./staticInfo";


for (const project of staticInfoVisible) {
  createModalProject(project, handlerModal.update.bind(handlerModal))
}