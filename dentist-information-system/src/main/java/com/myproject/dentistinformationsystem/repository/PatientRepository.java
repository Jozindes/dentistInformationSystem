package com.myproject.dentistinformationsystem.repository;

import com.myproject.dentistinformationsystem.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient, String> {
}
