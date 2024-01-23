package com.api.API.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.API.model.visit.Visit;
import com.api.API.model.visit.VisitRepository;

@Service
public class VisitService {

    @Autowired
    private final VisitRepository visitRepository;

    public VisitService(VisitRepository visitRepository) {
        this.visitRepository = visitRepository;
    }

    public List<Visit> getVisits(int user_id) {
        return (List<Visit>) visitRepository.findAllByUserId(user_id);
    }

}
