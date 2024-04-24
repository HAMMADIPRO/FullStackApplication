package Hammadi.pro.react.controller;

import Hammadi.pro.react.model.Client;
import Hammadi.pro.react.Service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequestMapping("/client")
@RestController
@CrossOrigin
public class ClientController {

    @Autowired
    private ClientService clientService;

    @PostMapping("/add")
    public String add(@RequestBody Client client){
        clientService.saveClient(client);
    return "New client is added";
    }

    @GetMapping("/getAll")
    public List<Client> getAllclient(){
        return clientService.getAllClients();
    }
}
