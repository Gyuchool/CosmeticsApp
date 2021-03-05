package com1san.cosmeticsApp.service;

import com1san.cosmeticsApp.domain.Member;
import com1san.cosmeticsApp.domain.SensitiveStatus;
import com1san.cosmeticsApp.domain.SkinStatus;
import com1san.cosmeticsApp.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class MemberService {
    private final MemberRepository memberRepository;
    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @Transactional //변경
    public Long join(Member member) {
        validateDuplicateMember(member); //중복 회원 검증
        memberRepository.save(member);
        return member.getId();
    }
    private void validateDuplicateMember(Member member) {
        List<Member> findMembers =
                memberRepository.findByName(member.getName());
        if (!findMembers.isEmpty()) {
            throw new IllegalStateException("이미 존재하는 회원입니다.");
        }
    }
    /**
     * 전체 회원 조회
     */
    public List<Member> findMembers() {
        return memberRepository.findAll();
    }
    public Member findOne(Long memberId) {
        return memberRepository.findOne(memberId);
    }
    @Transactional
    public List<Member> findByMember(String memberName){
        return memberRepository.findByName(memberName);
    }
    @Transactional
    public List<Member> findByEmail(String email){
        return memberRepository.findByEmail(email);
    }
    /**
     * 회원 수정
     */
    @Transactional
    public void updateSkin(Long id, String skin) {
        Member member = memberRepository.findOne(id);
        member.setSkin_status(skin);
    }
    @Transactional
    public void updateSensitive(Long id, String sensitive) {
        Member member = memberRepository.findOne(id);
        member.setSensitive_status(sensitive);
    }
    @Transactional
    public void updateNickname(Long id, String nickname) {
        Member member = memberRepository.findOne(id);
        member.setNickname(nickname);
    }
    @Transactional
    public void updateSkinTrouble(Long id, boolean blackhead,boolean oily,boolean keratin,
                               boolean pimple,boolean dry,boolean glow,boolean flexibility,
                               boolean skintone,boolean wrinkle) {
        Member member = memberRepository.findOne(id);
        /*
        member.setBlackhead(blackhead);
        member.setOily(oily);
        member.setKeratin(keratin);
        member.setPimple(pimple);
        member.setDry(dry);
        member.setGlow(glow);
        member.setFlexibility(flexibility);
        member.setSkintone(skintone);
        member.setWrinkle(wrinkle);
        */
        if(blackhead) {
            member.getSkintype().add("블랙헤드");
        }
        if(oily) {
            member.getSkintype().add("기름짐");
        }
        if(keratin) {
            member.getSkintype().add("각질,모공");
        }
        if(pimple) {
            member.getSkintype().add("여드름");
        }
        if(dry) {
            member.getSkintype().add("건조,당김");
        }
        if(glow) {
            member.getSkintype().add("홍조");
        }
        if(flexibility) {
            member.getSkintype().add("처짐,탄력");
        }
        if(skintone) {
            member.getSkintype().add("피부톤");
        }
        if(wrinkle) {
            member.getSkintype().add("주름");
        }
    }
    @Transactional
    public void updatePersonal(Long id, String Sleeping_Hours,String Wash_Temperature,
                               String Wash_Num,String Stress,String Collyrium,String Food) {
        Member member = memberRepository.findOne(id);
        member.setSleeping_Hours(Sleeping_Hours);
        member.setWash_Temperature(Wash_Temperature);
        member.setWash_Num(Wash_Num);
        member.setStress(Stress);
        member.setCollyrium(Collyrium);
        member.setFood(Food);
    }
    @Transactional
    public void updatePassword(Long id, String password) {
        Member member = memberRepository.findOne(id);
        member.setPassword(password);
    }
}
