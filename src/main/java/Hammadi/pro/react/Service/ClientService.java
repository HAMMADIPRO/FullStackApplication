package Hammadi.pro.react.Service;

import Hammadi.pro.react.model.Client;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ClientService {

    public Client saveClient(Client client);
    public List<Client> getAllClients();
}
