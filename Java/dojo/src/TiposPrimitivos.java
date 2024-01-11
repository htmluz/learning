public class TiposPrimitivos {
    public static void main(String[] args) {
        // int, double, float, chat, byte, short, long, boolean
        int varOne = 10; //4 bytes serve pra numeros inteiros
        long numeroGrande = 100000;  //8 bytes serve pra numeros inteiros maiores
        float salarioFloat = 2500.0F; //4 bytes serve pra floats
        double salarioDouble = 2000; //8 bytes serve pra floats maiores
        byte idadeByte = 10;  //1 byte serve pra numero pequeno
        short idadeShort = 10; //2 bytes serve pra numero pequeno 
        boolean isTrue = true; //1 bit
        char caractere = 'W'; //2 bytes traduz pra tabela ascii, tb da pra usar unicode
        int idade = (int) 1000000000000000L; //casting, forçando algo que não cabe 
        String nome = "fdsjidfsoijpodsfaipjo"; //aspas duplas pra string

        System.out.println(idade);

    }
}
