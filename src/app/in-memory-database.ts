import { InMemoryDbService } from "angular-in-memory-web-api";
import { Skill } from "./pages/skills/model/Skill";

export class InMemoryDataBase implements InMemoryDbService {

    createDb() {
        const skills: Skill[] = [
            { id: 1, name: "Java 17" },
            { id: 2, name: "Spring Boot 3" },
            { id: 3, name: "Angular 15" },
            { id: 4, name: "Scrum" },
            { id: 5, name: "Typescript" },
            { id: 6, name: "Node" },
            { id: 7, name: "React" },
            { id: 8, name: "SQL" },
            { id: 9, name: "MongoDB" },
            { id: 10, name: "Java Script" }
        ]

        return { skills }
    }
}