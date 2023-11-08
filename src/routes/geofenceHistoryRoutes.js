const express = require("express");
const router = express.Router();
const geofenceHistoryController = require("../controllers/geofenceHistoryController");
const { authenticateToken } = require("../middleware/authMiddleware");

// Rute untuk menyimpan data Geofence ke dalam database (POST)
router.post("/data", geofenceHistoryController.saveGeofenceHistoryData);

// Rute untuk mengambil semua data Geofence dari database dalam format history (GET)
router.get(
  "/data",
  authenticateToken,
  geofenceHistoryController.getGeofenceHistory
);

module.exports = router;
