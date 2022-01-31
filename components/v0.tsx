import {
  Text,
  Box,
  Flex,
  Button,
  Icon,
  Input,
  Modal,
  Image,
  AspectRatio,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  useToast,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import Select from 'react-select'; 

const Beta = () => {
  const [videoTitle, setVideoTitle] = useState("Welcome To MinuteEarth");
  const [email, setEmail] = useState("kush@dubverse.ai");
  const [link, setLink] = useState(
    "https://www.youtube.com/watch?v=MbHIxbbyOi8"
  );
  const [channelName, setChannelName] = useState("MinuteEarth");
  const [langs, setLangs] = useState(['hindi', 'english`']);
  const [globalLangs, setGlobalLangs] = useState([]);
  const [speakers, setSpeakers] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  const toast = useToast();

  const data = (e) => {
    axios
      .get(
        "https://api.dubverse.ai/api/data/?project_id=3fbd901a-4d1b-4b96-910c-cc50dcc44990"
      )
      .then((response) => {
        console.log(response.data);
      });
  };

  const emailValidator = () => {
    console.log(email);
    axios
      .get("https://api.dubverse.ai/api/helpers/validate-email/", {
        params: {
          email: email,
        },
      })
      .then((response) => {
        console.log(response.status);
      })
      .catch(() => {
        console.log("Invalid Email");
      });
  };

  const getYtInfo = (e: any) => {
    axios
      .get("https://api.dubverse.ai/api/youtube_info/", {
        params: {
          youtube_link: link,
        },
      })
      .then((response) => {
        setVideoTitle(response.data.video_title);
        setChannelName(response.data.channel_name);
      })
      .catch((error) => {
        console.log("Invalid Email");
        toast({
          title: "Invalid Email",
          description: "Please enter a valid email.",
          status: "warning",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  const processV = () => {
    axios.get("");
  };

  useEffect(() => {
    console.log("product v0 Launched");
    console.log(langs);
  });

  return (
    <Flex direction="column" align="center">
      <Text color={useColorModeValue("dark1", "light1")}>{email}</Text>
      <Text
        p={3}
        fontSize={{ base: "sm", md: "md" }}
        color={useColorModeValue("dark1", "light1")}
      >
        {videoTitle} | {channelName}
      </Text>
      <Button
        bg={useColorModeValue("light1", "dark1")}
        color={useColorModeValue("dark1", "light1")}
        w="64vw"
        h={12}
        m={2}
        onClick={onOpen}
      >
        Change Profile
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="sm"
        isCentered={true}
        closeOnEsc={false}
        closeOnOverlayClick={false}
      >
        <ModalOverlay sx={{ bg: "rgba(0,0,0,0.8)", filter: "blur(8px)" }} />
        <ModalContent>
          <ModalBody>
            <Flex direction="column" alignItems="center">
              <FormControl
                display="flex"
                flexDirection="column"
                alignItems="center"
                p={4}
              >
                <Input
                  type="email"
                  variant="filled"
                  placeholder="Email"
                  m={4}
                  w="80%"
                  onChange={(event) => setEmail(event.currentTarget.value)}
                  onBlur={emailValidator}
                />
                <Input
                  type="text"
                  variant="filled"
                  placeholder="Video"
                  m={4}
                  w="80%"
                  onChange={(event) => setLink(event.currentTarget.value)}
                  onBlur={getYtInfo}
                />
              </FormControl>
              <Button
                type="submit"
                onClick={() => {
                  toast({
                    title: "Profile Saved",
                    description:
                      "Thank you for participating in our beta program",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                  onClose();
                }}
                m={4}
                w={40}
              >
                Let's Dub
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box
        bg={useColorModeValue("light1", "dark1")}
        w={{ base: "64vw", md: "30vw" }}
        m={4}
        borderRadius={8}
        overflow="hidden"
      >
        <AspectRatio maxW="400px" ratio={16 / 9}>
          <iframe
            title="naruto"
            src={link.replace("/watch?v=", "/embed/")}
            allowFullScreen
          />
        </AspectRatio>
      </Box>
      <Flex w="64vw" m={4} justifyContent="space-between" direction="row">
        <Box w="30vw">
          <FormControl>
            <FormLabel
              fontSize={{ base: "sm", md: "md" }}
              color={useColorModeValue("dark1", "light1")}
            >
              Source
            </FormLabel>
            <Select
              placeholder="English"
            ></Select>
          </FormControl>
        </Box>
        <Box w="30vw">
          <FormControl>
            <FormLabel
              fontSize={{ base: "sm", md: "md" }}
              color={useColorModeValue("dark1", "light1")}
            >
              Target
            </FormLabel>
              <Select
    colorScheme="purple"
    options={langs}
  />
          </FormControl>
        </Box>
      </Flex>
      <Flex w="64vw" m={4} justifyContent="space-between" direction="row">
        <Icon
          as={FaRegPlayCircle}
          w={8}
          h={8}
          m={2}
          color={useColorModeValue("dark1", "light1")}
        />
        <Box
          bg={useColorModeValue("light1", "dark1")}
          pr="30vw"
          borderRadius={4}
        ></Box>
      </Flex>
      <Box
        bg={useColorModeValue("light1", "dark1")}
        w="64vw"
        h={12}
        m={4}
        borderRadius={8}
      ></Box>
    </Flex>
  );
};

export default Beta;
