package com.esp.fizzbuzz.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esp.fizzbuzz.model.FizzBuzz;
import com.esp.fizzbuzz.model.Stage;
import com.esp.fizzbuzz.repository.FizzBuzzRepository;

@Service
public class FizzBuzzService {
	@Autowired
	FizzBuzzRepository fizzrepo;
	
	List<FizzBuzz> listeFizzBuzz = new ArrayList<>();
	
	
	public Iterable<FizzBuzz> getFizzBuzzList(){
		return fizzrepo.findAll();
	}
	
	public Iterable<FizzBuzz> getFizzBuzzListByStage(Stage stage) {
        return fizzrepo.findByStage(stage);
    }
	
	// Enregistrer une liste de valeurs dans la base de données
	public Iterable<FizzBuzz> saveFizzBuzzList() {
		List<FizzBuzz> fizzBuzzList = makeList();
		return fizzrepo.saveAll(fizzBuzzList);
    }
	
	public void deleteFizzBuzz() {
		fizzrepo.deleteAll();
	}
	
	
	
	
	public List<FizzBuzz> makeList(){
		for(int i=1; i<=100; i++) {
			String value = fizzBuzzStage1(i);
			listeFizzBuzz.add(new FizzBuzz(i, value, Stage.LOW));
		}
		for(int i=1; i<=100; i++) {
			String value = fizzBuzzStage2(i);
			listeFizzBuzz.add(new FizzBuzz(i, value, Stage.HIGHT));
		}
		
		return listeFizzBuzz;
	}
	
	
	public String fizzBuzzStage1(int n){
        String chaine ="";   
        //ici on verifie si le chiffre est notre cible 
        if (n % 3 == 0 || n % 5 == 0) {
            // S'il est notre cible on verifie si c'est un multiple de 3 ensuite on verifie s'il est multiple de 5
            if (n % 3 ==0) {
                chaine += "Fizz";
            }
            if (n % 5 ==0) {
                chaine += "Buzz";
            }
        } 
        // Et si le chiffre n'est pas notre cible on le retourne directement en chaine 
        else {
            chaine += n;
        }
        return chaine;
    }
	
	
    public String fizzBuzzStage2(int n){
        String chaine ="";
        // On vérifie d'abord si notre chiffre est notre cible càd s'il est mutltiple de 3 ou 5, ou aussi 
        // si les caractère qui le compose contiennent un digit 3 ou 5.
        if (n % 3 == 0 || n % 5 ==0 ||String.valueOf(n).contains("3")|| String.valueOf(n).contains("5") ) {

            // On vérifie si la cible s'il contient un 3 ou un 5 on fait le traitement
            if (String.valueOf(n).contains("3")|| String.valueOf(n).contains("5")) {
                
                // Ici on sait que notre cible contient au moins soit un 3 ou un 5 on le met dans un tableau
                // pour traiter par caractère afin de jouer sur le nombre de caractere cible s'y trouvant.

                char []tab = String.valueOf(n).toCharArray();

                // Donc pour chaque caractere on verifie si c'est lui le cible
                for(int j=0; j<tab.length; j++){
                    if (tab[j] == '3') {
                        chaine += "Fizz";
                    }else if(tab[j] == '5'){
                        chaine += "Buzz";
                    }
                }
            }
            // La deuxieme partie qui consiste à vérifier si le chiffre est multiple de 3 et ou de 5
            if (n % 3 == 0 || n % 5 ==0) {
                if (n % 3 ==0) {
                    chaine += "Fizz";
                }
                if (n % 5 ==0) {
                    chaine += "Buzz";
                }
            }
        }
        // Et si le chiffre n'est pas notre cible on le retourne directement en chaine 
        else {
            chaine += n;
        }
        return chaine;
    }
}
