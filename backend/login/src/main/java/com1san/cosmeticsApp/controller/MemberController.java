package com1san.cosmeticsApp.controller;

import com1san.cosmeticsApp.domain.Member;
import com1san.cosmeticsApp.domain.SensitiveStatus;
import com1san.cosmeticsApp.domain.SkinStatus;
import com1san.cosmeticsApp.service.MemberService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;

    @Data
    static class CreateMemberRequest {
        private String nickname;
        private String name;
        private String password;
        private String email;
    }
    @Data
    @AllArgsConstructor
    class CreateMemberResponse {
        private Long id;
    }
    //회원가입
    @PostMapping("/members/new")
    public CreateMemberResponse saveMember(@RequestBody @Validated CreateMemberRequest request) {
        Member member = new Member();
        member.setName(request.getName());
        member.setPassword(request.getPassword());
        member.setNickname(request.getNickname());
        member.setEmail(request.getEmail());
        Long id = memberService.join(member);
        return new CreateMemberResponse(id);
    }
    @Data
    static class UpdateMemberRequest {
        private String name;
        private String nickname;
        private String password;
    }
    @Data
    @AllArgsConstructor
    class UpdateMemberResponse {
        private Long id;
    }
    //피부타입 수정
    @PostMapping("/members/skin/{id}")
    public UpdateMemberResponse updateMemberSkin(@PathVariable("id") Long id,
                                                 @RequestBody @Validated UpdateMemberSkinRequest request) {
        memberService.updateSkin(id,request.getSkin());
        return new UpdateMemberResponse(id);
    }
    @Data
    static class UpdateMemberSkinRequest {
        private String skin;
    }
    //피부민감 수정
    @PostMapping("/members/sensitive/{id}")
    public UpdateMemberResponse updateMemberSkin(@PathVariable("id") Long id,
                                                 @RequestBody @Validated UpdateMemberSensitiveRequest request) {
        memberService.updateSensitive(id,request.getSensitive());
        return new UpdateMemberResponse(id);
    }
    @Data
    static class UpdateMemberSensitiveRequest {
        private String sensitive;
    }
    //닉네임 수정
    @PostMapping("/members/nickname/{id}")
    public UpdateMemberResponse updateMemberNickname(@PathVariable("id") Long id,
                                                     @RequestBody @Validated UpdateMemberNicknameRequest request) {
        memberService.updateNickname(id,request.getNickname());
        return new UpdateMemberResponse(id);
    }
    @Data
    static class UpdateMemberNicknameRequest {
        private String nickname;
    }
    //피부고민 수정
    @PostMapping("/members/skinTrouble/{id}")
    public UpdateMemberResponse updateMemberSkinTrouble(@PathVariable("id") Long id,
                                                     @RequestBody @Validated UpdateMemberSkinTroubleRequest request) {
        memberService.updateSkinTrouble(id,request.isBlackhead(),request.isOily(),request.isKeratin(),
                request.isPimple(),request.isDry(),request.isGlow(),request.isFlexibility(),
                request.isSkintone(),request.isWrinkle());
        return new UpdateMemberResponse(id);
    }
    @Data
    static class UpdateMemberSkinTroubleRequest {
        private boolean blackhead;
        private boolean oily;
        private boolean keratin;
        private boolean pimple;
        private boolean dry;
        private boolean glow;
        private boolean flexibility;
        private boolean skintone;
        private boolean wrinkle;
    }
    //개인특성 수정
    @PostMapping("/members/personal/{id}")
    public UpdateMemberResponse updateMemberPersonal(@PathVariable("id") Long id,
                                                     @RequestBody @Validated UpdateMemberPersonalRequest request) {
        memberService.updatePersonal(id,request.getSleeping_Hours(),request.getWash_Temperature(),
                request.getWash_Num(),request.getStress(),request.getCollyrium(),request.getFood());
        return new UpdateMemberResponse(id);
    }
    @Data
    static class UpdateMemberPersonalRequest {
        private String sleeping_Hours;
        private String wash_Temperature;
        private String wash_Num;
        private String stress;
        private String collyrium;
        private String food;
    }
    //비밀번호 수정
    @PostMapping("/members/password/{id}")
    public UpdatePasswordResponse updateMemberPassword(@PathVariable("id") Long id,
                                                     @RequestBody @Validated UpdateMemberPasswordRequest request) {
        Member member=memberService.findOne(id);
        if(!member.getPassword().equals(request.getCurrentpw())){
            return new UpdatePasswordResponse("현재 비밀번호가 틀립니다",-1L);
        }
        else{
            if(member.getPassword().equals(request.getUpdatepw())) {
                return new UpdatePasswordResponse("현재 비밀번호와 같습니다", -1L);
            }
            else{
                memberService.updatePassword(id,request.getUpdatepw());
                return new UpdatePasswordResponse("성공",id);
            }
        }

    }
    @Data
    static class UpdateMemberPasswordRequest {
        private String currentpw;
        private String updatepw;
    }
    @Data
    @AllArgsConstructor
    class UpdatePasswordResponse {
        private String state;
        private Long id;
    }
    //로그인
    @PostMapping("/members/login")
    public LoginResponse login(@RequestBody @Validated LoginRequest request){
        List<Member> findMembers=memberService.findByMember(request.getName());
        if(findMembers.isEmpty()){
            return new LoginResponse("false",0L);
        }
        else{
            Member member=findMembers.stream().findAny().get();
            if(!member.getPassword().equals(request.getPassword())){
                return new LoginResponse("false",-1L);
            }
            else{
                return new LoginResponse("true",member.getId());
            }
        }
    }
    @Data
    static class LoginRequest{
        private String name;
        private String password;
    }
    @Data
    @AllArgsConstructor
    class LoginResponse {
        private String state;
        private Long id;
    }
    //아이디찾기
    @PostMapping("/members/findname")
    public NameResponse findName(@RequestBody @Validated NameRequest request){
        List<Member> findMembers=memberService.findByEmail(request.getEmail());
        if(findMembers.isEmpty()){
            return new NameResponse("없다!");
        }
        else{
            Member member=findMembers.stream().findAny().get();
            return new NameResponse(member.getName());
        }
    }
    @Data
    static class NameRequest{
        private String email;
    }
    @Data
    @AllArgsConstructor
    class NameResponse {
        private String name;
    }
    //비번찾기
    @PostMapping("/members/findpassword")
    public PasswordResponse findPassword(@RequestBody @Validated PasswordRequest request){
        List<Member> findMembers=memberService.findByEmail(request.getEmail());
        if(findMembers.isEmpty()){
            return new PasswordResponse("맞는 이멜 x");
        }
        else{
            Member member=findMembers.stream().findAny().get();
            if(!member.getName().equals(request.getName())){
                return new PasswordResponse("이멜하고 아디 다름");
            }
            else{
                return new PasswordResponse(member.getPassword());
            }
        }
    }
    @Data
    static class PasswordRequest{
        private String email;
        private String name;
    }
    @Data
    @AllArgsConstructor
    class PasswordResponse {
        private String password;
    }
    //Get 요청1
    @GetMapping("/members/information_1/{id}")
    public Info_1_Response information_1(@PathVariable("id") Long id) {
        Member member = memberService.findOne(id);
        return new Info_1_Response(member.getNickname(),member.getSkin_status(),member.getSensitive_status(),member.getSkintype(),
                member.getSleeping_Hours(),member.getWash_Temperature(),member.getWash_Num(),
                member.getStress(),member.getCollyrium(),member.getFood());
    }
    @Data
    @AllArgsConstructor
    class Info_1_Response {
        private String nickname;
        private String skin_status;
        private String sensitive_status;
        private List skintype; // 피부고민 true인것만 보내줘
        private String Sleeping_Hours;
        private String Wash_Temperature;
        private String Wash_Num;
        private String Stress;
        private String Collyrium;
        private String Food;
    }
    //Get 요청2
    @GetMapping("/members/information_2/{id}")
    public Info_2_Response information_2(@PathVariable("id") Long id) {
        Member member = memberService.findOne(id);
        return new Info_2_Response(member.getName(),member.getNickname(),member.getSleeping_Hours(),
                member.getWash_Temperature(),member.getWash_Num(),member.getStress(),
                member.getCollyrium(),member.getFood());
    }
    @Data
    @AllArgsConstructor
    class Info_2_Response {
        private String name;
        private String nickname;
        private String Sleeping_Hours;
        private String Wash_Temperature;
        private String Wash_Num;
        private String Stress;
        private String Collyrium;
        private String Food;
    }
    /*
    닉네임 피부타입 피부고민 수면시간 세안온도 세안횟수 스트레스 세안제종류 음식
    아이디 닉네임 수면시간 세안온도 세안횟수 스트레스 세안제종류 음식
    @GetMapping("/api/v2/members")
    public MemberApiController.Result membersV2() {
        List<Member> findMembers = memberService.findMembers();
        //엔티티 -> DTO 변환
        List<MemberApiController.MemberDto> collect = findMembers.stream()
                .map(m -> new MemberApiController.MemberDto(m.getName()))
                .collect(Collectors.toList());
        return new MemberApiController.Result(collect);
    }
    @Data
    @AllArgsConstructor
    class Result<T> {
        private T data;
    }
    @Data
    @AllArgsConstructor
    class MemberDto {
        private String name;
    }
    */
}
