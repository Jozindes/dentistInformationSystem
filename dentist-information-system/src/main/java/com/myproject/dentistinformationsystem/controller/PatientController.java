package com.myproject.dentistinformationsystem.controller;

import com.myproject.dentistinformationsystem.model.Patient;
import com.myproject.dentistinformationsystem.model.Visit;
import com.myproject.dentistinformationsystem.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class PatientController {

    @Autowired
    private PatientService patientService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/listOfPatients")
    public List<Patient> getAllPatients(Model model) {
        return patientService.getAllPatients();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/addNewPatient")
    public ResponseEntity<String> addPatient(@RequestBody Patient patient) {
        patientService.addPatient(patient);
        return ResponseEntity.ok("Patient added successfully");
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/listOfPatients/{id}")
    public Optional<Patient> getAllPatientByID(@PathVariable String id) {
        return patientService.getPatient(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/addNewVisit/{id}")
    public ResponseEntity<String> addVisit(@PathVariable String id, @RequestBody Visit visit) {
        patientService.addVisit(id, visit);
        return ResponseEntity.ok("Visit added successfully");
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/listOfPatients/listOfVisits/{id}")
    public List<Visit> getVisitsByID(@PathVariable String id) {
        return patientService.getVisitsByID(id);
    }
}
