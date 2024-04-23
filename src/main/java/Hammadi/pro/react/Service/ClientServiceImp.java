package Hammadi.pro.react.Service;

import Hammadi.pro.react.model.Client;
import Hammadi.pro.react.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientServiceImp implements ClientService {


    @Autowired
    private ClientRepository clientRepository;


    @Override
    public Client saveClient(Client client) {
        return clientRepository.save(client);
    }
}
