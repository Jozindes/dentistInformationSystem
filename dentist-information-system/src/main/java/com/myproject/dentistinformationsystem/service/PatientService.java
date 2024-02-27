package com.myproject.dentistinformationsystem.service;

import com.myproject.dentistinformationsystem.model.Patient;
import com.myproject.dentistinformationsystem.model.Visit;
import com.myproject.dentistinformationsystem.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    public List<Visit> getVisitsByID(String id) {
        return patientRepository.findById(id).get().getVisits();
    }

    public Optional<Patient> getPatient(String id) {
        return patientRepository.findById(id);
    }

    public Patient addPatient(Patient patient) {
        long millis = System.currentTimeMillis();
        Date date = new Date(millis);
        patient.setPatientFrom(date);
        return patientRepository.save(patient);
    }

    public Visit addVisit(String id, Visit visit) {
        long millis = System.currentTimeMillis();
        Date date = new Date(millis);

        visit.setDateOfVisit(date);

        Patient patient = patientRepository.findById(id).get();
        patient.getVisits().add(visit);
        visit.setPatient(patient);
        patientRepository.save(patient);
        return visit;
    }
}
