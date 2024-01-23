package com.api.API.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.api.API.model.visit.*;
import com.api.API.service.VisitService;

@RestController
@RequestMapping("/visit")
public class VisitController {
    @Autowired
    VisitService visitService;

    @GetMapping("/{user_id}")
    public ResponseEntity<List<Visit>> getVisits(@PathVariable("user_id") int user_id) {
        List<Visit> visits = visitService.getVisits(user_id);
        return new ResponseEntity<>(visits, HttpStatus.OK);
    }
}