package Hammadi.pro.react.controller;

import Hammadi.pro.react.model.Client;
import Hammadi.pro.react.Service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RequestMapping("/client")
@RestController
public class ClientController {

    @Autowired
    private ClientService clientService;

    @PostMapping("/add")
    public String add(@RequestBody Client client){
        clientService.saveClient(client);
    return "New client is added";
    }


}
