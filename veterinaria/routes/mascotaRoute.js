const router = express.Router()
const {getMascota, setMascota, updateMascota, deleteMascota} = require ("../controllers/mascotaController")

router.get ("/", getMascota)
router.post ("/", setMascota)
router.update ("/:id", updateMascota)
router.delete ("/:id", deleteMascota)

module.exports = router