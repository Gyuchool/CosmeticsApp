package com1san.cosmeticsApp.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Member {
    @Id
    @GeneratedValue
    @Column(name = "member_id")
    private Long id;
    private String name;
    private String password;
    private String nickname;
    private String email; // 이메일인증 보류

    private String skin_status;
    private String sensitive_status;
    //피부고민 엔티티 나눠야하나?
    private ArrayList<String> skintype=new ArrayList<String>();
    /*
    private boolean blackhead;
    private boolean oily;
    private boolean keratin;
    private boolean pimple;
    private boolean dry;
    private boolean glow;
    private boolean flexibility;
    private boolean skintone;
    private boolean wrinkle;
    */
    //개인특성
    private String sleeping_Hours;
    private String wash_Temperature;
    private String wash_Num;
    private String stress;
    private String collyrium; // 세안제종류
    private String food;
}
/*
Name: '' 로그인id
PW: '' 로그인password
PWT: '' 비번확인
EMAIL: '' 이멜(보류)
NickNAME: '' 닉네임
list:"지성" 피부타입
api 명세
blackhead, oily, keratin, pimple, dry, glow, flexibility, skintone, wrinkle 여기까지가 boolean으로
Sleeping_Hours
    Wash_Temperature
    Wash_Num
    Stress
    Collyrium
    Food 이게 그냥 스트링 값으로 보낼듯

 */
