import { Router } from "express";
import controllerHorario from "./controllers/controller.horario.js";
import controllerPaciente from "./controllers/controller.paciente.js";
import controllerConsulta from "./controllers/controller.consulta.js";
import controllerAdmin from "./controllers/controller.admin.js";

const router = Router();

router.post("/paciente/login", controllerPaciente.Login);
router.post("/paciente", controllerPaciente.Cadastrar);
router.get("/horario", controllerHorario.Listar);
router.post("/consulta/confirmar", controllerConsulta.ListarConsulta);
router.get("/consulta/:id_paciente", controllerConsulta.Confirmar);
router.delete("consulta/:id_paciente", controllerConsulta.Deletar);
router.get("/admin", controllerAdmin.Listar)

//router.get("/horario", jwt.ValidateJWT, controllerHorario.Listar);




//router.get("/teste", (req, res) => res.status(200).json({mensagem:"ok"}));



//router.post("/paciente/login", controllerPaciente.Login);



export default router;
